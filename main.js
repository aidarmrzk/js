/*-------------------------------------------------------------------------------------------------------------------------------------------------*/
// Константы
/*-------------------------------------------------------------------------------------------------------------------------------------------------*/
const showFilterButtons = document.querySelectorAll(".show-filters");
const showFilter = document.querySelector("#show-filter");

const filterTitleBlocks = document.querySelectorAll(".filter-block-title");

const hasChildrenBoxes = document.querySelectorAll('.hasChildren-box');

const buttonSearch = document.querySelector('#search');
const filtersContainer = document.querySelector(".filters");
const id = document.querySelector("#id-object");
const minPrice = document.querySelector("#min-price");
const maxPrice = document.querySelector("#max-price");

const cardSliders = document.querySelectorAll(".card-slider");

const paginationButtons = document.querySelectorAll(".pagination button.page");

const objectFavoritesButtons = document.querySelectorAll(".object-block-info-title-buttons .favorites-button");
const likeButtons = document.querySelectorAll(".object-block-info-title-buttons .like");
const dislikeButtons = document.querySelectorAll(".object-block-info-title-buttons .dislike");

const cardActionButtons = document.querySelectorAll(".card-info-action-box svg");

const categoriesButtons = document.querySelectorAll(".categories button");
const cards = document.querySelectorAll('.cards .card');
const favoritesEmpty = document.querySelector('.favorites_empty');
const pagination = document.querySelector('.pagination');

const themes = document.querySelectorAll(".theme");

const body = document.querySelector("body");
const headerButtons = document.querySelectorAll("svg.show-menu");

const hasChildrenItems = document.querySelectorAll(".header-menu > .menu-item-has-children > a");
const subHasChildrenItems = document.querySelectorAll(".sub-menu .menu-item-has-children > a");

const video = document.getElementById("video");

const objectSliderButtons = document.querySelectorAll('.object-block-slider-button');
const objectSliderImages = document.querySelectorAll('.object-block-slider-main img');


/*-------------------------------------------------------------------------------------------------------------------------------------------------*/
// Функция помощники
/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

// Функция высшего порядка, принимающая функцию обратного вызова
function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

function addClass(item, className) {
  item.classList.add(className);
}
function removeClass(item, className) {
  item.classList.remove(className);
}
function hasClass(item, className) {
  return item.classList.contains(className);
}

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/
// Плашка темы
/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

themes.forEach((theme) => {
  const plashka = theme.querySelector(".plashka");
  plashka.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (theme.classList.contains("selected")) {
      theme.classList.remove("selected");
    } else {
      theme.classList.add("selected");
    }
  });
});

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/
// Показываем выпадающий блок header
/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

headerButtons.forEach((headerButton) => {
  headerButton.addEventListener("click", () => {
    if (body.classList.contains("show")) {
      body.classList.remove("show");
    } else {
      body.classList.add("show");
    }
  });
});

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/
// Выпадающие списки меню header
/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

if (window.innerWidth < 1000) {
  hasChildrenItems.forEach((itemHasChildren) => {
    itemHasChildren.addEventListener("click", (event) => {
      event.preventDefault();
      const parent = event.target.closest(".menu-item-has-children");
      if (parent.classList.contains("selected")) {
        parent.classList.remove("selected");
      } else {
        hasChildrenItems.forEach((item) => {
          const parentNode = item.closest(".menu-item-has-children");
          if (parentNode.classList.contains("selected")) {
            parentNode.classList.remove("selected");
          }
        });
        parent.classList.add("selected");
      }
    });
  });
  
  subHasChildrenItems.forEach((subHasChildrenItem) => {
    subHasChildrenItem.addEventListener("click", (event) => {
      event.preventDefault();
      const parent = event.target.closest(".menu-item-has-children");
      if (parent.classList.contains("selected")) {
        parent.classList.remove("selected");
      } else {
        parent.classList.add("selected");
      }
    });
  });
} else {
  hasChildrenItems.forEach((itemHasChildren) => {
    itemHasChildren.addEventListener("mouseenter", (event) => {
      const parent = event.target.closest(".menu-item-has-children");
      hasChildrenItems.forEach((item) => {
        const parentNode = item.closest(".menu-item-has-children");
        if (parentNode.classList.contains("selected")) {
          parentNode.classList.remove("selected");
        }
      });
      parent.classList.add("selected");
    });
  });

  subHasChildrenItems.forEach((subHasChildrenItem) => {
    subHasChildrenItem.addEventListener("mouseenter", (event) => {
      const parent = event.target.closest(".menu-item-has-children");
      parent.classList.add("selected");
    });

    const parentSub = subHasChildrenItem.closest('.menu-item-has-children')
    parentSub.addEventListener("mouseleave", () => {
      parentSub.classList.remove("selected");
    });
  });
}

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/
// Открываем фильтр контейнер
/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

if (showFilterButtons.length >= 0 && showFilter) {
  showFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const parent = button.closest(".filter");
      const filterContainer = parent.querySelector(".filter-container");
      if (filterContainer.classList.contains("show")) {
        filterContainer.classList.remove("show");
        button.classList.add("none");
      }
    });
  })
  showFilter.addEventListener("click", () => {
    const filterContainer = document.querySelector(".object .filter-container");
    const showFilterButton = document.querySelector(".object .show-filters");
    if (filterContainer.classList.contains("show")) {
      filterContainer.classList.remove("show");
      showFilterButton.classList.add("none");
    } else {
      filterContainer.classList.add("show");
      showFilterButton.classList.remove("none");
    }
  });
} else if (showFilterButtons.length >= 0) {
  showFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const parent = button.closest(".filter");
      const filterContainer = parent.querySelector(".filter-container");
      if (filterContainer.classList.contains("show")) {
        filterContainer.classList.remove("show");
        button.querySelector('span').textContent = "Показать фильтр";
      } else {
        filterContainer.classList.add("show");
        button.querySelector('span').textContent = "Скрыть";
      }
    });
  })
}

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/
// Выпадающие списки фильтров
/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

filterTitleBlocks.forEach((block) => {
  block.addEventListener("click", () => {
    block.closest(".filter-block").classList.toggle("open");
  });
});

document.addEventListener("click", (event) => {
  filterTitleBlocks.forEach((block) => {
    const parentFilterBlock = block.closest(".filter-block");

    if (event.target !== block && !parentFilterBlock.contains(event.target)) {
      block.closest(".filter-block").classList.remove("open");
    }
  });
});

hasChildrenBoxes.forEach((box) => {
  input = box.querySelector('input');
  label = box.querySelector('label');
  input.addEventListener('click', (e) => {e.stopPropagation()})
  label.addEventListener('click', (e) => {e.stopPropagation()})
  box.addEventListener('click', (event) => {
    parent = event.target.closest('.hasChildren');
    parent.classList.toggle('open');
  })
})

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/
// Функция поиска объекта недвижимости
/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

if (buttonSearch) {
  buttonSearch.addEventListener('click', () => {
  
    const idValue = id.value;
    const minPriceValue = minPrice.value;
    const maxPriceValue = maxPrice.value;
  
    const getSelectedAttributes = (attribute) => {
      const selectedCheckboxes = filtersContainer.querySelectorAll(`input[data-${attribute}]:checked`);
      const attributeValues = Array.from(selectedCheckboxes).map(checkbox => checkbox.getAttribute(`data-${attribute}`));
      return attributeValues;
    };
  
    const arrayType = getSelectedAttributes('type');
    const arrayRoom = getSelectedAttributes('room');
    const arrayCity = getSelectedAttributes('city');
    const arrayArea = getSelectedAttributes('area');

    forEach(cards, (i) => { addClass(i, 'none') });

    cards.forEach((card) => {
      const dataIdValue = card.getAttribute('data-id');
      const dataPriceValue = parseFloat(card.getAttribute('data-price'));
    
      // Проверяем ID
      if (dataIdValue && dataIdValue.startsWith(idValue)) {
  
        // Проверяем цену
        if (
          (minPriceValue === "" || minPriceValue === "0" || dataPriceValue >= parseFloat(minPriceValue)) &&
          (maxPriceValue === "" || dataPriceValue <= parseFloat(maxPriceValue))
        ) {
  
          // Проверяем тип
          if (arrayType.length === 0 || arrayType.some(typeClass => card.classList.contains(typeClass))) {
  
            // Проверяем комнаты
            if (arrayRoom.length === 0 || arrayRoom.some(roomClass => card.classList.contains(roomClass))) {
  
              // Проверяем город
              if (arrayCity.length === 0 || arrayCity.some(cityClass => card.classList.contains(cityClass))) {
      
                // Проверяем область
                if (arrayArea.length === 0 || arrayArea.some(typeClass => card.classList.contains(typeClass))) {
      
                  removeClass(card, 'none');
                }
              }
            }
          }
        }
      }
    });
  
    forEach(categoriesButtons, (i) => { removeClass(i, 'selected') });
    addClass(favoritesEmpty, 'none');
    addClass(pagination, 'none');
  });
}

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/
// Кнопки выбора категорий объектов Недвижимости
/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

categoriesButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonCategory = button.dataset.category;
    const favoriteCards = document.querySelectorAll('.cards .card.favorite_category');

    forEach(cards, (i) => { addClass(i, 'none') });
    addClass(favoritesEmpty, 'none');
    

    if (hasClass(button, 'selected')) {
      removeClass(button, 'selected');
      forEach(cards, (i) => { removeClass(i, 'none') });
      addClass(favoritesEmpty, 'none');
      removeClass(pagination, 'none');
    } else {
      forEach(categoriesButtons, (i) => { removeClass(i, 'selected') });
      addClass(button, 'selected');
      if (buttonCategory === "favorite_category" && favoriteCards.length <= 0) {
        removeClass(favoritesEmpty, 'none');
      } else {
        cards.forEach((card) => {
          if (hasClass(card, buttonCategory)) {
            removeClass(card, 'none');
          }
        })
      }
      addClass(pagination, 'none');
    }
  });
});

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/
// Слайдер на карточке объекта Недвижимости
/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

// Слайдер на декстопе
cardSliders.forEach((cardSlider) => {
  cardSlider.addEventListener("click", (e) => {
    e.preventDefault();
  });
})

cardSliders.forEach((cardSlider) => {
  const parentSlider = cardSlider.closest('.card');
  const cardSliderItems = cardSlider.querySelectorAll(".card-slider-item");
  const paginationItems = cardSlider.querySelectorAll(".card-img-pagination span");
  const cardSliderFavorite = cardSlider.querySelector('svg.favorites');

  let currentIndex = 0;
  let startX;

  cardSlider.addEventListener("mousedown", (e) => {
    e.stopPropagation();
    e.preventDefault();
    startX = e.clientX;
  });

  cardSlider.addEventListener("mouseup", (e) => {
    e.preventDefault();
    const endX = e.clientX;
    const deltaX = startX - endX;

    if (deltaX > 10 && currentIndex < cardSliderItems.length - 1) {
      currentIndex++;
    } else if (deltaX < -10 && currentIndex > 0) {
      currentIndex--;
    } else if (deltaX === 0 && !cardSliderFavorite.contains(e.target)) {
      const closestAnchor = cardSliderItems[currentIndex].closest('a');
      if (closestAnchor) {
        window.location.href = closestAnchor.href;
      }
    } else if (deltaX === 0 && cardSliderFavorite.contains(e.target)) {
      if (cardSliderFavorite.classList.contains("selected")) {
        cardSliderFavorite.classList.remove("selected");
        parentSlider.classList.remove("favorite_category");
      } else {
        cardSliderFavorite.classList.add("selected");
        parentSlider.classList.add("favorite_category");
      }
      handleFavorite(cardSliderFavorite);
    }

    showSlide(currentIndex);
  });

  function showSlide(index) {
    cardSliderItems.forEach((img, i) => {
      img.style.transform = `translateX(-${index * 100}%)`;
    });

    paginationItems.forEach((item, i) => {
      if (i === index) {
        item.classList.add("selected");
      } else {
        item.classList.remove("selected");
      }
    });
  }

  showSlide(currentIndex);
});

// Слайдер на мобилке
cardSliders.forEach((cardSlider) => {
  const parentSlider = cardSlider.closest('.card');
  const cardSliderItems = cardSlider.querySelectorAll(".card-slider-item");
  const paginationItems = cardSlider.querySelectorAll(".card-img-pagination span");
  const cardSliderFavorite = cardSlider.querySelector('svg.favorites');

  let currentIndex = 0;
  let startX;
  let isDragging = false;

  cardSlider.addEventListener("touchstart", (e) => {
    e.preventDefault();
    e.stopPropagation();
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  cardSlider.addEventListener("touchmove", (e) => {
    if (!isDragging) return;

    const endX = e.touches[0].clientX;
    const deltaX = startX - endX;

    cardSliderItems.forEach((img, i) => {
      img.style.transform = `translateX(-${currentIndex * 100 + deltaX}%)`;
    });
  });

  cardSlider.addEventListener("touchend", (e) => {
    e.preventDefault();
    if (!isDragging) return;

    const endX = startX - e.changedTouches[0].clientX;
    isDragging = false;

    if (endX > 10 && currentIndex < cardSliderItems.length - 1) {
      currentIndex++;
    } else if (endX < -10 && currentIndex > 0) {
      currentIndex--;
    } else if (endX === 0 && !cardSliderFavorite.contains(e.target)) {
      const closestAnchor = cardSliderItems[currentIndex].closest('a');
      if (closestAnchor) {
        window.location.href = closestAnchor.href;
      }
    } else if (endX === 0 && cardSliderFavorite.contains(e.target)) {
      if (cardSliderFavorite.classList.contains("selected")) {
        cardSliderFavorite.classList.remove("selected");
        parentSlider.classList.remove("favorite_category");
      } else {
        cardSliderFavorite.classList.add("selected");
        parentSlider.classList.add("favorite_category");
      }
      handleFavorite(cardSliderFavorite);
    }

    showSlide(currentIndex);
  });

  function showSlide(index) {
    cardSliderItems.forEach((img, i) => {
      img.style.transform = `translateX(-${index * 100}%)`;
    });

    paginationItems.forEach((item, i) => {
      if (i === index) {
        item.classList.add("selected");
      } else {
        item.classList.remove("selected");
      }
    });
  }

  showSlide(currentIndex);
});

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/
// Кнопки лайка и дизлайка на карточках объектов Недвижимости
/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

function getLike (buttons) {
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      handleVote(button);
      if (button.classList.contains("selected")) {
        button.classList.remove("selected");
      } else {
        const svgs = button
          .closest(".card-info-action-box")
          .querySelectorAll("svg");
        svgs.forEach((svg) => {
          svg.classList.remove("selected");
        });
        button.classList.add("selected");
      }
    });
  });
}
getLike(cardActionButtons);

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/
// Кнопки пагинации объектов Недвижимости
/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

paginationButtons.forEach((paginationButton) => {
  paginationButton.addEventListener("click", (event) => {
    paginationButtons.forEach((button) => {
      if (button.classList.contains("selected")) {
        button.classList.remove("selected");
      }
    });
    event.target.classList.add("selected");
  });
});

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/
// Кнопки избранное, лайка и дизлайка на странице объекта Недвижимости
/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

function getFavorites (buttons) {
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      if (button.classList.contains("selected")) {
        button.classList.remove("selected");
      } else {
        button.classList.add("selected");
      }
    });
  });
}
getFavorites(objectFavoritesButtons);
getFavorites(likeButtons);
getFavorites(dislikeButtons);

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/
// Слайдер на странице объекта Недвижимости
/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

function changePopupImg() {
  objectSliderButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      objectSliderImages.forEach((image) => {
        image.classList.remove("selected");
      });
      objectSliderButtons.forEach((objectSliderButton) => {
        objectSliderButton.classList.remove("selected");
      });
      objectSliderButtons[index].classList.add("selected");
      objectSliderImages[index].classList.add("selected");
    });
  });
}
if (objectSliderButtons.length >= 0) {
  changePopupImg();
}

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/
// Отправка запроса при добавлении/удалении избранного
/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

function handleFavorite(button) {
  const post_id = button.closest('.card').getAttribute("data-post-id");
  const xhr = new XMLHttpRequest();
  xhr.open("POST", customLikesSystem.ajaxUrl, true);
  xhr.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.log("Запрос успешно завершен");

        let response = JSON.parse(xhr.responseText);
        console.log(response);
        if (response.success) {
          console.log(response.data);
          // Здесь можно что-то сделать с полученными данными
        }
      } else {
        console.error("Произошла ошибка:", xhr.status);
      }
    }
  };

  const data =
    "action=custom_favorite_system_process" +
    "&post_id=" +
    encodeURIComponent(post_id);

  xhr.send(data);
  console.log("Отправка запроса...");
}

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/
// Отправка запроса при лайке и дизлайке
/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

function handleVote(button) {
  const post_id = button.closest('.card').getAttribute("data-post-id");
  const type = button.getAttribute("data-action");
  const xhr = new XMLHttpRequest();
  xhr.open("POST", customLikesSystem.ajaxUrl, true);
  xhr.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.log("Запрос успешно завершен");

        let response = JSON.parse(xhr.responseText);
        console.log(response);
        if (response.success) {
          console.log(response.data);
          // Здесь можно что-то сделать с полученными данными
        }
      } else {
        console.error("Произошла ошибка:", xhr.status);
      }
    }
  };

  const data =
    "action=custom_likes_system_process" +
    "&post_id=" +
    encodeURIComponent(post_id) +
    "&type=" +
    encodeURIComponent(type);

  xhr.send(data);
  console.log("Отправка запроса...");
}

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/
// Работа с cookie и индетификатором пользователя
/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

// Получаем уникальный идентификатор пользователя из cookie
function letIndetification () {
  let user_id = getCookie('custom_likes_user_id');
  
  if (!user_id) {
      // Если у пользователя нет идентификатора, создаем новый
      user_id = 'user_' + generateUniqueId();
      // Устанавливаем идентификатор в cookie на 1 год
      setCookie('custom_likes_user_id', user_id, 365);
  }
}

// Функция для генерации уникального идентификатора
function generateUniqueId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}

// Функция для получения значения cookie
function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

// Функция для установки значения cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + "; " + expires + "; path=/";
}

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/
// Воспроизведение видео
/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

if (video) {
  const playBg = document.getElementById("play-bg");
  const playButton = document.getElementById("play-button");

  playButton.addEventListener("click", function () {
    video.play();
    playBg.style.display = "none";
  });
  video.addEventListener("pause", function () {
    playBg.style.display = "flex";
  });
}

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/
// Аккордеон
/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

function accordeon() {
  document.querySelectorAll(".summary").forEach((summary) => {
      summary.addEventListener("click", () => {
          const parentSummary = summary.closest(".residence-container-block-card");

          if (!parentSummary.classList.contains("open")) {
              parentSummary.classList.add("open");
          } else {
              parentSummary.classList.remove("open");
          }
      }
      );
  }
  );
}
if (document.querySelectorAll(".summary").length >= 0) {
  accordeon();
}

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/
// Остановка itc-slider
/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

function handleSliderItems() {
  const windowWidth = window.innerWidth;
  const itcSliderItems = document.querySelectorAll('.section-blog .itc-slider-items');
  const currencySliderItems = document.querySelectorAll('.currency-slider .itc-slider-items');
  const blogSliderItems = document.querySelectorAll('.blog-slider .itc-slider-items');

  stopSlider (itcSliderItems);
  stopSlider (blogSliderItems)

  if (currencySliderItems.length >= 0) {
    currencySliderItems.forEach((items) => {
      const currencySliderItem = items.querySelectorAll('.itc-slider-item');
      items.classList.remove('stop-slider');
      currencySliderItem.forEach((item) => {
        item.classList.remove('stop-slider');
      });

      if (windowWidth >= 1440 && currencySliderItem.length <= 9) {
        items.classList.add('stop-slider');
        currencySliderItem.forEach((item) => {
          item.classList.add('stop-slider');
        });
      }
    });
  }

  function stopSlider (itcSliderItems) {
    if (itcSliderItems.length >= 0) {
      itcSliderItems.forEach((items) => {
        const itcSliderItem = items.querySelectorAll('.itc-slider-item');
        items.classList.remove('stop-slider');
        itcSliderItem.forEach((item) => {
          item.classList.remove('stop-slider');
        });
  
        if (windowWidth >= 1000 && itcSliderItem.length <= 5) {
          items.classList.add('stop-slider');
          itcSliderItem.forEach((item) => {
            item.classList.add('stop-slider');
          });
        } else if (windowWidth >= 850 && itcSliderItem.length <= 3) {
          items.classList.add('stop-slider');
          itcSliderItem.forEach((item) => {
            item.classList.add('stop-slider');
          });
        } else if (windowWidth >= 600 && itcSliderItem.length <= 2) {
          items.classList.add('stop-slider');
          itcSliderItem.forEach((item) => {
            item.classList.add('stop-slider');
          });
        }
      });
    }
  }
}

handleSliderItems();
window.addEventListener('resize', handleSliderItems);