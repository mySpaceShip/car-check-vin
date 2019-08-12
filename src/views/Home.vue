<template>
  <div class="home font-sans w-full h-half-screen">
    <div class="hero pt-2 bg-brand w-full h-half-screen  relative">
      <img src="@/assets/emozgo/world.svg" class="absolute" alt=""
           style="height: 75vh; transform: translateX(-50%) translateY(-15%)">
      <header class="flex justify-between items-center container mx-auto">
        <div class="flex items-center">
          <div>
            <img src="@/assets/logo.svg" class="w-40" alt="">
          </div>
          <div>
            <a href="" class="text-white ml-8 font-bold hover:no-underline">
              Выбрать город

              <font-awesome-icon :icon="['far', 'map-marker-alt']"></font-awesome-icon>
            </a>
          </div>
        </div>
        <div class=" items-center">
          <div>
            <nav class="-mx-2  lex items-center">
              <a href=""
                 class="text-white mx-2 hover:opacity-75 opacity-100 font-bold no-underline"
                 style="transition: all 0.5s"
              >
                Купить франшизу
              </a>
              <a href=""
                 class="text-white mx-2 hover:opacity-75 opacity-100 font-bold no-underline"
                 style="transition: all 0.5s"
              >
                Заказать корпоратив
              </a>
              <a href=""
                 class="text-white mx-2 hover:opacity-75 opacity-100 font-bold no-underline"
                 style="transition: all 0.5s"
              >
                Расписание
              </a>
              <a href=""
                 class="text-white mx-2 hover:opacity-75 opacity-100 font-bold no-underline"
                 style="transition: all 0.5s"
              >
                MozgoParty
              </a>
            </nav>
          </div>
          <div>
          </div>
        </div>
      </header>

      <div class="justify-center mt-24 text-center text-6xl font-bold text-white ">
        Самая масштабная умная<br/>
        игра в мире!
      </div>

      <div class="container text-center mx-auto mt-16">
        <a href=""
           class="inline-block mx-auto bg-brand-light px-6 py-4 rounded-full font-bold no-underline text-white hover-up"
        >
          Что такое Мозгобойня?
        </a>
      </div>
    </div>

    <section class="py-8 relative">
      <img src="@/assets/gifts.png" class="absolute hidden lg:block pin-b pin-r w-105"/>
      <div class="container mx-auto py-8 overflow-hidden">
        <h2 class="text-3xl px-3 text-grey-darkest">Ближайшие игры:</h2>
        <div class="flex flex-col flex-wrap md:flex-row mt-8">
          <div class="w-full md:w-1/2 lg:w-1/3 px-3">
            <div class="flex flex-col w-full overflow-hidden rounded-lg shadow-lg">
              <div class="bg-brand p-6 h-48 flex justify-end flex-col">
                <p class="text-white text-xl font-bold">Дата</p>
                <p class="text-white text-xl font-bold">Время</p>
              </div>
              <div class="p-6">
                <h2 class="text-xl border-b text-grey-darkest">Тематическая</h2>
                <div class="py-4">
                  <p class="py-1"><b class="text-grey-darkest">Время:</b> 19:00</p>
                  <p class="py-1"><b class="text-grey-darkest">Цена:</b> 300 &#8381; </p>
                </div>
                <p><b class="text-grey-darkest">Регистрация:</b> 16.01.2018 в 12:00 </p>
                <div class="pt-4 flex justify-between items-center">
                  <a href=""
                     class="bg-grey flex w-12 h-12 items-center justify-center rounded-full text-white no-underline hover-up"
                  >
                    <font-awesome-icon :icon="['fa', 'bell']"></font-awesome-icon>
                  </a>

                  <a href=""
                     class="px-8 py-2 bg-brand hover-up text-white no-underline rounded-full font-bold"
                  >Участвовать</a>
                </div>
              </div>

            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-3">
            <div class="flex flex-col w-full overflow-hidden rounded-lg shadow-lg">
              <div class="bg-brand p-6 h-48 flex justify-end flex-col">
                <p class="text-white text-xl font-bold">Дата</p>
                <p class="text-white text-xl font-bold">Время</p>
              </div>
              <div class="p-6">
                <h2 class="text-xl border-b text-grey-darkest">Тематическая</h2>
                <div class="py-4">
                  <p class="py-1"><b class="text-grey-darkest">Время:</b> 19:00</p>
                  <p class="py-1"><b class="text-grey-darkest">Цена:</b> 300 &#8381; </p>
                </div>
                <p><b class="text-grey-darkest">Регистрация:</b> 16.01.2018 в 12:00 </p>
                <div class="pt-4 flex justify-between items-center">
                  <a href=""
                     class="bg-grey flex w-12 h-12 items-center justify-center rounded-full text-white no-underline hover-up"
                  >
                    <font-awesome-icon :icon="['fa', 'bell']"></font-awesome-icon>
                  </a>

                  <a href=""
                     class="px-8 py-2 bg-brand hover-up text-white no-underline rounded-full font-bold"
                  >Участвовать</a>
                </div>
              </div>

            </div>
          </div>
          <div class="w-full justify-center mt-16 lg:mt-0 lg:w-1/3 px-3 flex items-start lg:justify-end">
            <a href="" class="text-xl px-8 py-3 border-2 no-underline text-grey-darkest font-bold rounded-full">Полное
              расписание</a>
          </div>
        </div>
      </div>
    </section>

    <section class="py-8 bg-grey-warm">
      <div class="container mb-12 mx-auto">
        <h2 class="text-center py-4 font-extrabold text-grey-darkest text-3xl">Что такое Мозгобойня?</h2>
        <div class="flex py-8 -mx-5">
          <div class="px-5 flex flex-2">
            <div class="bg-white h-full w-full py-6 px-12 shadow-lg rounded-lg">
              <iframe class="h-full w-full" src="https://www.youtube.com/embed/F2UB_srMaaQ?showinfo=0&controls=0"
                      frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
          </div>
          <div class="px-5 flex flex-1">
            <div class="bg-white text-xl font-medium p-8 shadow-lg rounded-lg">
              <p>
                <span class="font-bold">Мозгобойня</span> – <br>
                самая масштабная умная игра в мире!
              </p>

              <p class="pt-8">
                Уже <span class="font-bold text-brand-light">200 городов</span> планеты еженедельно собирают веселые
                компании в барах<br/>
                и ресторанах, чтобы<br/>
                с драйвом проводить интеллектуальные турниры.
              </p>

              <a href=""
                 class="px-8 inline-block py-2 text-base mt-5 bg-brand hover-up text-white no-underline rounded-full font-bold"
              >Узнать больше</a>

            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 h-50vh overflow-hidden relative">
      <img src="@/assets/phone.png" class="absolute" style="transform: translateX(-20%)" alt=""/>
      <img src="@/assets/emozgo/fire.svg" class="absolute pin-r" alt="">
      <div class="container mb-12 mx-auto">
        <div class="flex">
          <div class="flex-1"></div>
          <div class="flex-1">
            <h2 class="text-6xl mb-6 text-grey-darkest leading-none">
              Сыграй
              Мозгобойню
              прямо сейчас!
            </h2>
            <p class="text-xl">
              Один демонстрационный тур <br>
              для того, чтобы понять что такое Мозгобойня!<br><br>

              Приготовь лист бумаги и ручку.
            </p>

            <p class="w-1/2 mt-8">
              <a href=""
                 class="block text-center bg-brand-light py-4 rounded-full font-bold no-underline text-white hover-up"
              >
                Начать игру
              </a>
              <a href=""
                 class="mt-4 block text-center py-4 rounded-full border-2 border-grey-darker text-grey-darkest font-bold no-underline hover-up"
              >
                Сыграть дома
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>


    <section class="py-16 themes">
      <div class="container mb-12 mx-auto">
        <div class="flex">
          <div class="flex-1">
            <h2 class="text-6xl my-6 text-white leading-none">
              Поймали<br/>
              волну<br/>
              классической<br/>
              Мозгобойни?
            </h2>

            <div class="text-2xl mt-4 leading-normal font-medium text-white">
              Погружайтесь в атмосферу различных тем,
              эпох и событий <b>с тематическими играми</b>! <br><br>

              — Мозгобойня «О музыке»<br>
              — Мозгобойня «Назад в 90-е»<br>
              — Мозгобойня «Back 2 School»<br>
              — Мозгобойня «Приключения» и мн. другое<br>
            </div>

            <a href=""
               class="mt-8 block mr-8 bg-white text-center py-4 rounded-full border-2 text-brand-light font-bold no-underline hover-up"
            >
              Посмотреть продуктовую линейку
            </a>
          </div>
          <div class="flex-1"></div>
        </div>
      </div>
    </section>

    <section class="py-16">
    </section>
  </div>
</template>

<style lang="less" scoped>
  .hover-up {
    transition: all 0.5s;
    &:hover {
      transform: translateY(-3px);
    @apply shadow-md;
    }
  }

  .flex-1 {
    flex: 300 !important;
  }
  .flex-2 {
    flex: 757;
  }

  .themes {
    background: url("../assets/themes.png");
    background-size: cover;
  }

</style>

<script>


export default {};
</script>
