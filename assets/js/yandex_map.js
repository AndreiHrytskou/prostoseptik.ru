ymaps.ready(init);
function init() {
  var center = [55.4554, 37.7578];
  var myMap = new ymaps.Map(
      "map",
      {
        center: center,
        zoom: 5,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    objectManager = new ymaps.ObjectManager({
      clusterize: true,
      gridSize: 32,
    });
  objectManager.objects.options.set("preset", "islands#greenDotIcon");
  objectManager.clusters.options.set("preset", "islands#greenClusterIcons");
  myMap.geoObjects.add(objectManager);
  objectManager.add({
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: 1,
        geometry: {
          type: "Point",
          coordinates: [55.38329370370979, 38.15136203704823],
        },
        properties: {
          balloonContent: "Раменский р-н снт Великие озера Глубина 42 метра",
          clusterCaption: "Глубина 42 метра",
          hintContent: "Раменский р-н снт Великие озера  Глубина 42 метра",
        },
      },
      {
        type: "Feature",
        id: 2,
        geometry: {
          type: "Point",
          coordinates: [55.31, 38.3],
        },
        properties: {
          balloonContent: "Раменский р-н снт Южное Глубина 42 метра",
          clusterCaption: "Глубина 42 метра",
          hintContent: "Раменский р-н снт Южное Глубина 42 метра",
        },
      },
      {
        type: "Feature",
        id: 3,
        geometry: {
          type: "Point",
          coordinates: [55.4723395364418, 38.25796742858886],
        },
        properties: {
          balloonContent: "Раменский р-н деревня Белоозериха Глубина 42 метра",
          clusterCaption: "Глубина 42 метра",
          hintContent: "Раменский р-н деревня Белоозериха Глубина 42 метра",
        },
      },
      {
        type: "Feature",
        id: 4,
        geometry: {
          type: "Point",
          coordinates: [55.52601986018435, 37.149156230163534],
        },
        properties: {
          balloonContent: "Деревня Бараново новая москва Глубина 42 метра",
          clusterCaption: "Глубина 42 метра",
          hintContent: "Деревня Бараново новая москва Глубина 42 метра ",
        },
      },
      {
        type: "Feature",
        id: 5,
        geometry: {
          type: "Point",
          coordinates: [55.38090531346405, 37.83912906745906],
        },
        properties: {
          balloonContent: "Домодедовский р-н снт Aвиатор Глубина 42 метра",
          clusterCaption: "Глубина 42 метра",
          hintContent: "Домодедовский р-н снт Aвиатор Глубина 42 метра",
        },
      },
      {
        type: "Feature",
        id: 6,
        geometry: {
          type: "Point",
          coordinates: [55.79606604594061, 36.45327949999995],
        },
        properties: {
          balloonContent: "Истринский р-н, деревня Шейно Глубина 42 метра",
          clusterCaption: "Глубина 42 метра",
          hintContent: "Истринский р-н, деревня Шейно Глубина 42 метра",
        },
      },
      {
        type: "Feature",
        id: 7,
        geometry: {
          type: "Point",
          coordinates: [55.80951, 37.167894],
        },
        properties: {
          balloonContent: "Снт Усадьба МО Красногорский р-н",
          clusterCaption: "Метка 1",
          hintContent: "Снт Усадьба МО Красногорский р-н 95 метра",
        },
      },
      {
        type: "Feature",
        id: 8,
        geometry: {
          type: "Point",
          coordinates: [55.931956, 39.549292],
        },
        properties: {
          balloonContent: "Петушинский р-н, СНТ Березка 72 метра",
          clusterCaption: "Метка 2",
          hintContent: "Петушинский р-н, СНТ Березка 72 метра",
        },
      },
      {
        type: "Feature",
        id: 9,
        geometry: {
          type: "Point",
          coordinates: [55.131887, 37.485951],
        },
        properties: {
          balloonContent: "Чехов Луговая 50 метров",
          clusterCaption: "Метка 1",
          hintContent: "Чехов Луговая 50 метров",
        },
      },
      {
        type: "Feature",
        id: 10,
        geometry: {
          type: "Point",
          coordinates: [55.958416, 37.309073],
        },
        properties: {
          balloonContent:
            "Ленинградка 15 км.СНТ Сходненские Садоводы 66 метров",
          clusterCaption: "Метка 2",
          hintContent: "Ленинградка 15 км.СНТ Сходненские Садоводы 66 метров",
        },
      },
      {
        type: "Feature",
        id: 11,
        geometry: {
          type: "Point",
          coordinates: [55.802508, 37.208857],
        },
        properties: {
          balloonContent: "Николо-Урюпино 99 метров",
          clusterCaption: "Метка 1",
          hintContent: "Николо-Урюпино 99 метров",
        },
      },
      {
        type: "Feature",
        id: 12,
        geometry: {
          type: "Point",
          coordinates: [55.186736, 37.676286],
        },
        properties: {
          balloonContent: "Максимиха 40 метров",
          clusterCaption: "Метка 2",
          hintContent: "Максимиха 40 метров",
        },
      },
      {
        type: "Feature",
        id: 13,
        geometry: {
          type: "Point",
          coordinates: [55.130333, 37.641045],
        },
        properties: {
          balloonContent: "Домодедовец 38 метров",
          clusterCaption: "Метка 1",
          hintContent: "Домодедовец 38 метров",
        },
      },
      {
        type: "Feature",
        id: 14,
        geometry: {
          type: "Point",
          coordinates: [55.813921, 38.830262],
        },
        properties: {
          balloonContent: "д. Федорово Орехово-Зуево 19 метров",
          clusterCaption: "Метка 2",
          hintContent: "д. Федорово Орехово-Зуево 19 метров",
        },
      },
      {
        type: "Feature",
        id: 15,
        geometry: {
          type: "Point",
          coordinates: [55.593772, 37.765273],
        },
        properties: {
          balloonContent: "Ленинский р-н, Развилка СНТ Анис 90 метров",
          clusterCaption: "Метка 1",
          hintContent: "Ленинский р-н, Развилка СНТ Анис 90 метров",
        },
      },
      {
        type: "Feature",
        id: 16,
        geometry: {
          type: "Point",
          coordinates: [55.374631, 36.546251],
        },
        properties: {
          balloonContent: "Наро-Фоминский р-н СНТ Узоры 70 метров",
          clusterCaption: "Метка 2",
          hintContent: "Наро-Фоминский р-н СНТ Узоры 70 метров",
        },
      },
      {
        type: "Feature",
        id: 17,
        geometry: {
          type: "Point",
          coordinates: [55.370743, 37.347718],
        },
        properties: {
          balloonContent:
            "Варшавка 36км, НОвая Москва, Щаповское СП, д.Овечкино 49 метров",
          clusterCaption: "Метка 1",
          hintContent:
            "Варшавка 36км, НОвая Москва, Щаповское СП, д.Овечкино 49 метров",
        },
      },
      {
        type: "Feature",
        id: 18,
        geometry: {
          type: "Point",
          coordinates: [55.704768, 38.066757],
        },
        properties: {
          balloonContent: "Железнодорожный КП Романово Лайф 25 метров",
          clusterCaption: "Метка 2",
          hintContent: "Железнодорожный КП Романово Лайф 25 метров",
        },
      },
      {
        type: "Feature",
        id: 19,
        geometry: {
          type: "Point",
          coordinates: [55.75245, 38.236368],
        },
        properties: {
          balloonContent: "СНТ Тонар-Втормет 57 метров",
          clusterCaption: "Метка 1",
          hintContent: "СНТ Тонар-Втормет 57 метров",
        },
      },
      {
        type: "Feature",
        id: 20,
        geometry: {
          type: "Point",
          coordinates: [55.985997, 38.320603],
        },
        properties: {
          balloonContent:
            "Носовихенское шоссе, СНТ Мечта, д.Грибаново 40 метров",
          clusterCaption: "Метка 2",
          hintContent: "Носовихенское шоссе, СНТ Мечта, д.Грибаново 40 метров",
        },
      },
      {
        type: "Feature",
        id: 21,
        geometry: {
          type: "Point",
          coordinates: [55.099016, 37.546408],
        },
        properties: {
          balloonContent: "Чеховский рн СТ зил луч, д. крюково 35 метров",
          clusterCaption: "Метка 2",
          hintContent: "Чеховский рн СТ зил луч, д. крюково 35 метров",
        },
      },
      {
        type: "Feature",
        id: 22,
        geometry: {
          type: "Point",
          coordinates: [55.693683, 36.691526],
        },
        properties: {
          balloonContent: "Одинцовский район деревня Гигирево д 28 36 метров",
          clusterCaption: "Метка 2",
          hintContent: "Одинцовский район деревня Гигирево д 28 36 метров",
        },
      },
      {
        type: "Feature",
        id: 23,
        geometry: {
          type: "Point",
          coordinates: [55.884014, 37.440083],
        },
        properties: {
          balloonContent:
            "Ленинградское ш., 5км. СНТ Исток-2 Химки, Московская область. 80 метров",
          clusterCaption: "Метка 2",
          hintContent:
            "Ленинградское ш., 5км. СНТ Исток-2 Химки, Московская область. 80 метров",
        },
      },
      {
        type: "Feature",
        id: 24,
        geometry: {
          type: "Point",
          coordinates: [55.694479, 36.689442],
        },
        properties: {
          balloonContent: "Одинцовский рн, Гигирево 49 метров",
          clusterCaption: "Метка 2",
          hintContent: "Одинцовский рн, Гигирево 49 метров",
        },
      },
      {
        type: "Feature",
        id: 25,
        geometry: {
          type: "Point",
          coordinates: [55.949692, 37.485403],
        },
        properties: {
          balloonContent: "Долгопрудный, заводская ул.2 80 метров",
          clusterCaption: "Метка 2",
          hintContent: "Долгопрудный, заводская ул.2 80 метров",
        },
      },
      {
        type: "Feature",
        id: 26,
        geometry: {
          type: "Point",
          coordinates: [55.909665, 37.736132],
        },
        properties: {
          balloonContent: "Мытищи 75 метров",
          clusterCaption: "Метка 2",
          hintContent: "Мытищи 75 метров",
        },
      },
      {
        type: "Feature",
        id: 27,
        geometry: {
          type: "Point",
          coordinates: [55.33512, 37.387738],
        },
        properties: {
          balloonContent: "Я метки 2",
          clusterCaption: "Метка 2",
          hintContent: "Я подсказка для метки 2",
        },
      },
      {
        type: "Feature",
        id: 28,
        geometry: {
          type: "Point",
          coordinates: [55.70761091148078, 37.18260799999996],
        },
        properties: {
          balloonContent:
            "Варшавское ш.49 км Щаповское поселениеСНТ Родник вблизи д Чегодаево 37 метров",
          clusterCaption: "Метка 2",
          hintContent:
            "Варшавское ш.49 км Щаповское поселениеСНТ Родник вблизи д Чегодаево 37 метров",
        },
      },
      {
        type: "Feature",
        id: 29,
        geometry: {
          type: "Point",
          coordinates: [56.10411, 37.77219],
        },
        properties: {
          balloonContent:
            "Пушкинский р-нСНТ Тишково клаб Семеновское 90 метров",
          clusterCaption: "Метка 2",
          hintContent: "Пушкинский р-нСНТ Тишково клаб Семеновское 90 метров",
        },
      },
      {
        type: "Feature",
        id: 30,
        geometry: {
          type: "Point",
          coordinates: [56.378968, 36.836586],
        },
        properties: {
          balloonContent: "Клинский р-нОпалево СНТ Солнечный Берег 123 метра",
          clusterCaption: "Метка 2",
          hintContent: "Клинский р-нОпалево СНТ Солнечный Берег 123 метра",
        },
      },
      {
        type: "Feature",
        id: 31,
        geometry: {
          type: "Point",
          coordinates: [55.573164, 37.477642],
        },
        properties: {
          balloonContent: "Москва, коммунарка-1 102 метра",
          clusterCaption: "Метка 2",
          hintContent: "Москва, коммунарка-1 102 метра",
        },
      },
      {
        type: "Feature",
        id: 32,
        geometry: {
          type: "Point",
          coordinates: [55.512322, 38.175112],
        },
        properties: {
          balloonContent: "Снт София раменский район 47 метров",
          clusterCaption: "Метка 2",
          hintContent: "Снт София раменский район 47 метров",
        },
      },
      {
        type: "Feature",
        id: 33,
        geometry: {
          type: "Point",
          coordinates: [56.197488, 38.142593],
        },
        properties: {
          balloonContent: "Зубцово 1 80 метров",
          clusterCaption: "Метка 2",
          hintContent: "Зубцово 1 80 метров",
        },
      },
      {
        type: "Feature",
        id: 34,
        geometry: {
          type: "Point",
          coordinates: [56.197233, 38.14226],
        },
        properties: {
          balloonContent: "Зубцово 2 80 метров",
          clusterCaption: "Метка 2",
          hintContent: "Зубцово 2 80 метров",
        },
      },
      {
        type: "Feature",
        id: 35,
        geometry: {
          type: "Point",
          coordinates: [55.418727, 37.547647],
        },
        properties: {
          balloonContent: "Подольский р-н Чириково 25 метров",
          clusterCaption: "Метка 2",
          hintContent: "Подольский р-н Чириково 25 метров",
        },
      },
      {
        type: "Feature",
        id: 36,
        geometry: {
          type: "Point",
          coordinates: [55.520395, 37.485495],
        },
        properties: {
          balloonContent: "Коммунарка Новая москвка 60 метров",
          clusterCaption: "Метка 2",
          hintContent: "Коммунарка Новая москвка 60 метров",
        },
      },
      {
        type: "Feature",
        id: 37,
        geometry: {
          type: "Point",
          coordinates: [55.348467, 37.427417],
        },
        properties: {
          balloonContent:
            "Подольский район коттеджный посёлок Никулино 60 метров",
          clusterCaption: "Метка 2",
          hintContent: "Подольский район коттеджный посёлок Никулино 60 метров",
        },
      },
      {
        type: "Feature",
        id: 38,
        geometry: {
          type: "Point",
          coordinates: [55.387776, 36.522499],
        },
        properties: {
          balloonContent: "Наро-Фоминский р-н Тараскорво 78 метров",
          clusterCaption: "Метка 2",
          hintContent: "Наро-Фоминский р-н Тараскорво 78 метров",
        },
      },
      {
        type: "Feature",
        id: 39,
        geometry: {
          type: "Point",
          coordinates: [55.37371, 37.360942],
        },
        properties: {
          balloonContent: "Щаповское СП, Сатино-Русское 60 метров",
          clusterCaption: "Метка 2",
          hintContent: "Щаповское СП, Сатино-Русское 60 метров",
        },
      },
      {
        type: "Feature",
        id: 40,
        geometry: {
          type: "Point",
          coordinates: [55.362843, 37.585296],
        },
        properties: {
          balloonContent: "СНТ Лесной 188 метров",
          clusterCaption: "Метка 2",
          hintContent: "СНТ Лесной 188 метров",
        },
      },
      {
        type: "Feature",
        id: 41,
        geometry: {
          type: "Point",
          coordinates: [55.638348, 37.149047],
        },
        properties: {
          balloonContent: "х Рожновка 99 метров",
          clusterCaption: "Метка 2",
          hintContent: "х Рожновка 99 метров",
        },
      },
      {
        type: "Feature",
        id: 42,
        geometry: {
          type: "Point",
          coordinates: [55.950675, 38.555431],
        },
        properties: {
          balloonContent: "Ногинский р-н Мамонтово 65 метров",
          clusterCaption: "Метка 2",
          hintContent: "Ногинский р-н Мамонтово 65 метров",
        },
      },
      {
        type: "Feature",
        id: 43,
        geometry: {
          type: "Point",
          coordinates: [55.708749, 38.76614],
        },
        properties: {
          balloonContent: "Павлов-посадский рн КП Ефимовский лес 40 метров",
          clusterCaption: "Метка 2",
          hintContent: "Павлов-посадский рн КП Ефимовский лес 40 метров",
        },
      },
      {
        type: "Feature",
        id: 44,
        geometry: {
          type: "Point",
          coordinates: [55.538346, 38.313075],
        },
        properties: {
          balloonContent: "Раменский р-н Литвиново 56 метров",
          clusterCaption: "Метка 2",
          hintContent: "Раменский р-н Литвиново 56 метров",
        },
      },
      {
        type: "Feature",
        id: 45,
        geometry: {
          type: "Point",
          coordinates: [55.707786, 38.957742],
        },
        properties: {
          balloonContent: "д. Ионово, Ликино-Дулево 45 метров",
          clusterCaption: "Метка 2",
          hintContent: "д. Ионово, Ликино-Дулево 45 метров",
        },
      },
      {
        type: "Feature",
        id: 46,
        geometry: {
          type: "Point",
          coordinates: [56.398516, 36.804705],
        },
        properties: {
          balloonContent: "Губино 1 33 метра",
          clusterCaption: "Метка 2",
          hintContent: "Губино 1 33 метра",
        },
      },
      {
        type: "Feature",
        id: 47,
        geometry: {
          type: "Point",
          coordinates: [56.775018, 36.079414],
        },
        properties: {
          balloonContent: "Губино 2 33 метра",
          clusterCaption: "Метка 2",
          hintContent: "Губино 2 33 метра",
        },
      },
      {
        type: "Feature",
        id: 48,
        geometry: {
          type: "Point",
          coordinates: [55.327536, 37.260357],
        },
        properties: {
          balloonContent: "Клёновское СНТ 60 метров",
          clusterCaption: "Метка 2",
          hintContent: "Клёновское СНТ 60 метров",
        },
      },
      {
        type: "Feature",
        id: 49,
        geometry: {
          type: "Point",
          coordinates: [55.48956, 37.574983],
        },
        properties: {
          balloonContent: "Щербинка Нутузова 11 86 метров",
          clusterCaption: "Метка 2",
          hintContent: "Щербинка Нутузова 11 86 метров",
        },
      },
      {
        type: "Feature",
        id: 50,
        geometry: {
          type: "Point",
          coordinates: [56.041038, 38.886012],
        },
        properties: {
          balloonContent: "Киржачский р-н Финеево 62 метра",
          clusterCaption: "Метка 2",
          hintContent: "Киржачский р-н Финеево 62 метра",
        },
      },
      {
        type: "Feature",
        id: 51,
        geometry: {
          type: "Point",
          coordinates: [55.337983, 37.773906],
        },
        properties: {
          balloonContent: "Домодедовский р-н Сиеста Южная 44 метра",
          clusterCaption: "Метка 2",
          hintContent: "Домодедовский р-н Сиеста Южная 44 метра",
        },
      },
      {
        type: "Feature",
        id: 52,
        geometry: {
          type: "Point",
          coordinates: [55.509222, 37.856057],
        },
        properties: {
          balloonContent: "с. Лукино 57 метра",
          clusterCaption: "Метка 2",
          hintContent: "с. Лукино 57 метра",
        },
      },
      {
        type: "Feature",
        id: 53,
        geometry: {
          type: "Point",
          coordinates: [55.914332, 38.563741],
        },
        properties: {
          balloonContent: "Домодедовский р-он п.Сказка 46 метров",
          clusterCaption: "Метка 2",
          hintContent: "Домодедовский р-он п.Сказка 46 метров",
        },
      },
      {
        type: "Feature",
        id: 54,
        geometry: {
          type: "Point",
          coordinates: [55.134193, 37.619899],
        },
        properties: {
          balloonContent: " Снт Сосновый Аромат  38  метра",
          clusterCaption: "Метка 2",
          hintContent:
            "Симферополька 60 км Снт Сосновый Аромат ориентир д.Васькино 38  метра",
        },
      },
      {
        type: "Feature",
        id: 55,
        geometry: {
          type: "Point",
          coordinates: [55.235036, 37.813522],
        },
        properties: {
          balloonContent: "КП Голубино ленд42 метра",
          clusterCaption: "Метка 2",
          hintContent: "КП Голубино ленд42 метра",
        },
      },
      {
        type: "Feature",
        id: 56,
        geometry: {
          type: "Point",
          coordinates: [55.596941, 36.86032],
        },
        properties: {
          balloonContent: "Петелино 81 метр",
          clusterCaption: "Метка 2",
          hintContent: "Петелино 81 метр",
        },
      },
      {
        type: "Feature",
        id: 57,
        geometry: {
          type: "Point",
          coordinates: [55.53532, 38.34545],
        },
        properties: {
          balloonContent: "Днп Елкино раменский р-он 52 метра",
          clusterCaption: "Метка 2",
          hintContent: "Днп Елкино раменский р-он 52 метра",
        },
      },
      {
        type: "Feature",
        id: 58,
        geometry: {
          type: "Point",
          coordinates: [55.461221, 38.201163],
        },
        properties: {
          balloonContent: "Раменский р-н Кривцы 54 метра",
          clusterCaption: "Метка 2",
          hintContent: "Раменский р-н Кривцы 54 метра",
        },
      },
      {
        type: "Feature",
        id: 59,
        geometry: {
          type: "Point",
          coordinates: [56.008903, 37.649912],
        },
        properties: {
          balloonContent: "Мытищинский р-н Жостово 76 метров",
          clusterCaption: "Метка 2",
          hintContent: "Мытищинский р-н Жостово 76 метров",
        },
      },
      {
        type: "Feature",
        id: 60,
        geometry: {
          type: "Point",
          coordinates: [55.511455, 38.348711],
        },
        properties: {
          balloonContent: "п.миррный раменский р.48 метров",
          clusterCaption: "Метка 2",
          hintContent: "п.миррный раменский р.48 метров",
        },
      },
      {
        type: "Feature",
        id: 61,
        geometry: {
          type: "Point",
          coordinates: [55.811472, 37.010015],
        },
        properties: {
          balloonContent: "д. Покровское Истринский р-н 105 метров",
          clusterCaption: "Метка 2",
          hintContent: "д. Покровское Истринский р-н 105 метров",
        },
      },
      {
        type: "Feature",
        id: 62,
        geometry: {
          type: "Point",
          coordinates: [55.337983, 37.773906],
        },
        properties: {
          balloonContent: "Сиеста Южная 44 метра",
          clusterCaption: "Метка 2",
          hintContent: "Сиеста Южная 44 метра",
        },
      },
      {
        type: "Feature",
        id: 63,
        geometry: {
          type: "Point",
          coordinates: [56.007871, 35.870475],
        },
        properties: {
          balloonContent: "НоваяРига, Посаденки 55 метров",
          clusterCaption: "Метка 2",
          hintContent: "НоваяРига, Посаденки 55 метров",
        },
      },
      {
        type: "Feature",
        id: 64,
        geometry: {
          type: "Point",
          coordinates: [55.655397, 38.398532],
        },
        properties: {
          balloonContent: "КП Смородинка 40 метров",
          clusterCaption: "Метка 2",
          hintContent: "КП Смородинка 40 метров",
        },
      },
      {
        type: "Feature",
        id: 65,
        geometry: {
          type: "Point",
          coordinates: [55.704768, 38.066757],
        },
        properties: {
          balloonContent: "КП Романово лайф 19 метров",
          clusterCaption: "Метка 2",
          hintContent: "КП Романово лайф 19 метров",
        },
      },
      {
        type: "Feature",
        id: 66,
        geometry: {
          type: "Point",
          coordinates: [55.609238, 38.512016],
        },
        properties: {
          balloonContent: "ДПН Игнатьево 38 метра",
          clusterCaption: "Метка 2",
          hintContent: "ДПН Игнатьево 38 метра",
        },
      },
      {
        type: "Feature",
        id: 67,
        geometry: {
          type: "Point",
          coordinates: [55.600506, 37.042489],
        },
        properties: {
          balloonContent: "Краснознамеск,Одинцовский р-н 74 метра",
          clusterCaption: "Метка 2",
          hintContent: "Краснознамеск,Одинцовский р-н 74 метра",
        },
      },
      {
        type: "Feature",
        id: 68,
        geometry: {
          type: "Point",
          coordinates: [55.232854, 36.612555],
        },
        properties: {
          balloonContent: "Снт Арбат 2 калужская обл. 63 метра",
          clusterCaption: "Метка 2",
          hintContent: "Снт Арбат 2 калужская обл. 63 метра",
        },
      },
      {
        type: "Feature",
        id: 69,
        geometry: {
          type: "Point",
          coordinates: [55.391636, 37.380857],
        },
        properties: {
          balloonContent: "Щаповское С/п КП Александровские пруды 58 метров",
          clusterCaption: "Метка 2",
          hintContent: "Щаповское С/п КП Александровские пруды 58 метров",
        },
      },
      {
        type: "Feature",
        id: 70,
        geometry: {
          type: "Point",
          coordinates: [55.391736, 37.380957],
        },
        properties: {
          balloonContent: "Щаповское С/п КП Александровские пруды 58 метров",
          clusterCaption: "Метка 2",
          hintContent: "Щаповское С/п КП Александровские пруды 58 метров",
        },
      },
      {
        type: "Feature",
        id: 71,
        geometry: {
          type: "Point",
          coordinates: [56.4105, 37.229276],
        },
        properties: {
          balloonContent: "Дмитровское ш 40 км Шихово 161 метр",
          clusterCaption: "Метка 2",
          hintContent: "Дмитровское ш 40 км Шихово 161 метр",
        },
      },
      {
        type: "Feature",
        id: 72,
        geometry: {
          type: "Point",
          coordinates: [56.069796, 37.264759],
        },
        properties: {
          balloonContent: "Жилино-Малинки 130 метров",
          clusterCaption: "Метка 2",
          hintContent: "Жилино-Малинки 130 метров",
        },
      },
      {
        type: "Feature",
        id: 73,
        geometry: {
          type: "Point",
          coordinates: [55.395348, 37.807288],
        },
        properties: {
          balloonContent: "Востриково 51 метров",
          clusterCaption: "Метка 2",
          hintContent: "Востриково 51 метров",
        },
      },
      {
        type: "Feature",
        id: 74,
        geometry: {
          type: "Point",
          coordinates: [55.741404, 38.842371],
        },
        properties: {
          balloonContent: "Дрезна 51 метр",
          clusterCaption: "Метка 2",
          hintContent: "Дрезна 51 метр",
        },
      },
      {
        type: "Feature",
        id: 75,
        geometry: {
          type: "Point",
          coordinates: [55.554771, 37.92494],
        },
        properties: {
          balloonContent: "андреевское 70 метров",
          clusterCaption: "Метка 2",
          hintContent: "андреевское 70 метров",
        },
      },
      {
        type: "Feature",
        id: 76,
        geometry: {
          type: "Point",
          coordinates: [55.554771, 37.92494],
        },
        properties: {
          balloonContent: "Андреевское 38 метров",
          clusterCaption: "Метка 2",
          hintContent: "Андреевское 38 метров",
        },
      },
      {
        type: "Feature",
        id: 77,
        geometry: {
          type: "Point",
          coordinates: [55.235036, 37.813522],
        },
        properties: {
          balloonContent: "Голубино-Лэнд 36-85 метров",
          clusterCaption: "Метка 2",
          hintContent: "Голубино-Лэнд 36-85 метров",
        },
      },
      {
        type: "Feature",
        id: 78,
        geometry: {
          type: "Point",
          coordinates: [55.805942, 38.981701],
        },
        properties: {
          balloonContent: "Орехово-Зуево 67 метров",
          clusterCaption: "Метка 2",
          hintContent: "Орехово-Зуево 67 метров",
        },
      },
      {
        type: "Feature",
        id: 79,
        geometry: {
          type: "Point",
          coordinates: [55.395448, 37.807388],
        },
        properties: {
          balloonContent: "Домодево Востряково 52 метра",
          clusterCaption: "Метка 2",
          hintContent: "Домодево Востряково 52 метра",
        },
      },
      {
        type: "Feature",
        id: 80,
        geometry: {
          type: "Point",
          coordinates: [55.812206, 38.183143],
        },
        properties: {
          balloonContent: "Старая Купавна СНТ Купавна 40 метров",
          clusterCaption: "Метка 2",
          hintContent: "Старая Купавна СНТ Купавна 40 метров",
        },
      },
      {
        type: "Feature",
        id: 81,
        geometry: {
          type: "Point",
          coordinates: [55.518146, 37.720134],
        },
        properties: {
          balloonContent: "Калиновка 70 метров",
          clusterCaption: "Метка 2",
          hintContent: "Калиновка 70 метров",
        },
      },
      {
        type: "Feature",
        id: 82,
        geometry: {
          type: "Point",
          coordinates: [55.881364, 37.077972],
        },
        properties: {
          balloonContent:
            "Волоколамское ш. 25 км.дер Садки истренский р-он. 137 метра",
          clusterCaption: "Метка 2",
          hintContent:
            "Волоколамское ш. 25 км.дер Садки истренский р-он. 137 метра",
        },
      },
      {
        type: "Feature",
        id: 83,
        geometry: {
          type: "Point",
          coordinates: [56.370788, 36.850726],
        },
        properties: {
          balloonContent: "Солнечный берег 42 метров",
          clusterCaption: "Метка 2",
          hintContent: "Солнечный берег 42 метров",
        },
      },
      {
        type: "Feature",
        id: 84,
        geometry: {
          type: "Point",
          coordinates: [56.382691, 36.772527],
        },
        properties: {
          balloonContent: "Щапово 70 метров",
          clusterCaption: "Метка 2",
          hintContent: "Щапово 70 метров",
        },
      },
      {
        type: "Feature",
        id: 85,
        geometry: {
          type: "Point",
          coordinates: [55.152552, 37.617249],
        },
        properties: {
          balloonContent: "Снт Соколиная гора 51 метр",
          clusterCaption: "Метка 2",
          hintContent: "Снт Соколиная гора 51 метр",
        },
      },
      {
        type: "Feature",
        id: 86,
        geometry: {
          type: "Point",
          coordinates: [55.461221, 38.201163],
        },
        properties: {
          balloonContent: "Раменский р-н Кривцы 54 метра",
          clusterCaption: "Метка 2",
          hintContent: "Раменский р-н Кривцы 54 метра",
        },
      },
      {
        type: "Feature",
        id: 87,
        geometry: {
          type: "Point",
          coordinates: [55.716377, 38.372076],
        },
        properties: {
          balloonContent: "Есино 71 метр",
          clusterCaption: "Метка 2",
          hintContent: "Есино 71 метр",
        },
      },
      {
        type: "Feature",
        id: 88,
        geometry: {
          type: "Point",
          coordinates: [55.707923, 38.356823],
        },
        properties: {
          balloonContent: "СНТ Восток, Натальино 51 метр",
          clusterCaption: "Метка 2",
          hintContent: "СНТ Восток, Натальино 51 метр",
        },
      },
      {
        type: "Feature",
        id: 89,
        geometry: {
          type: "Point",
          coordinates: [55.395248, 37.807278],
        },
        properties: {
          balloonContent: "Востряково Домодедовский р-н 48 метров",
          clusterCaption: "Метка 2",
          hintContent: "Востряково Домодедовский р-н 48 метров",
        },
      },
      {
        type: "Feature",
        id: 90,
        geometry: {
          type: "Point",
          coordinates: [55.468091, 37.524929],
        },
        properties: {
          balloonContent: "Щербинка, д. Девятское 50 метров",
          clusterCaption: "Метка 2",
          hintContent: "Щербинка, д. Девятское 50 метров",
        },
      },
      {
        type: "Feature",
        id: 91,
        geometry: {
          type: "Point",
          coordinates: [55.534041, 36.989156],
        },
        properties: {
          balloonContent: "Наро-фоминский р-н Алабино, Петровское 65 метров",
          clusterCaption: "Метка 2",
          hintContent: "Наро-фоминский р-н Алабино, Петровское 65 метров",
        },
      },
      {
        type: "Feature",
        id: 92,
        geometry: {
          type: "Point",
          coordinates: [55.591126, 37.320778],
        },
        properties: {
          balloonContent: "Мешково  57 метров",
          clusterCaption: "Метка 2",
          hintContent: "Мешково  57 метров",
        },
      },
      {
        type: "Feature",
        id: 93,
        geometry: {
          type: "Point",
          coordinates: [55.885908, 38.093167],
        },
        properties: {
          balloonContent: "Леониха 76 метров",
          clusterCaption: "Метка 2",
          hintContent: "Леониха 76 метров",
        },
      },
      {
        type: "Feature",
        id: 94,
        geometry: {
          type: "Point",
          coordinates: [56.0032, 37.524399],
        },
        properties: {
          balloonContent: "Аббакумово 90 метров",
          clusterCaption: "Метка 2",
          hintContent: "Аббакумово 90 метров",
        },
      },
      {
        type: "Feature",
        id: 95,
        geometry: {
          type: "Point",
          coordinates: [55.704768, 38.066757],
        },
        properties: {
          balloonContent: "РомановоЛайф 14 метров",
          clusterCaption: "Метка 2",
          hintContent: "РомановоЛайф 14 метров",
        },
      },
      {
        type: "Feature",
        id: 96,
        geometry: {
          type: "Point",
          coordinates: [54.919104, 37.93227],
        },
        properties: {
          balloonContent:
            "Ступинский р-н, Матвейково д, Лесной край, участок № 18 117 метров",
          clusterCaption: "Метка 2",
          hintContent:
            "Ступинский р-н, Матвейково д, Лесной край, участок № 18 117 метров",
        },
      },
      {
        type: "Feature",
        id: 97,
        geometry: {
          type: "Point",
          coordinates: [55.615578, 37.31767],
        },
        properties: {
          balloonContent: "г.Москва. Лапшинка 80 метров",
          clusterCaption: "Метка 2",
          hintContent: "г.Москва. Лапшинка 80 метров",
        },
      },
      {
        type: "Feature",
        id: 98,
        geometry: {
          type: "Point",
          coordinates: [55.615578, 37.31767],
        },
        properties: {
          balloonContent: "Одинцовский р-н Назарьево 92 метра",
          clusterCaption: "Метка 2",
          hintContent: "Одинцовский р-н Назарьево 92 метра",
        },
      },
      {
        type: "Feature",
        id: 99,
        geometry: {
          type: "Point",
          coordinates: [55.186736, 37.676286],
        },
        properties: {
          balloonContent: "Максимиха Домодедовский р-он 40 метров",
          clusterCaption: "Метка 2",
          hintContent: "Максимиха Домодедовский р-он 40 метров",
        },
      },
      {
        type: "Feature",
        id: 100,
        geometry: {
          type: "Point",
          coordinates: [55.676098, 39.009862],
        },
        properties: {
          balloonContent: "Язвищи 61 метр",
          clusterCaption: "Метка 2",
          hintContent: "Язвищи 61 метр",
        },
      },
      {
        type: "Feature",
        id: 101,
        geometry: {
          type: "Point",
          coordinates: [55.583276, 37.175359],
        },
        properties: {
          balloonContent: "Шарапово 40 метров",
          clusterCaption: "Метка 2",
          hintContent: "Шарапово 40 метров",
        },
      },
      {
        type: "Feature",
        id: 103,
        geometry: {
          type: "Point",
          coordinates: [55.188478, 37.685458],
        },
        properties: {
          balloonContent: "д.Максимиха КП Сказка 40 метра",
          clusterCaption: "Метка 2",
          hintContent: "д.Максимиха КП Сказка 40 метра",
        },
      },
      {
        type: "Feature",
        id: 104,
        geometry: {
          type: "Point",
          coordinates: [55.188478, 37.685458],
        },
        properties: {
          balloonContent: ".Поселок краснознаменский 44 метров",
          clusterCaption: "Метка 2",
          hintContent: ".Поселок краснознаменский 44 метров",
        },
      },
      {
        type: "Feature",
        id: 105,
        geometry: {
          type: "Point",
          coordinates: [56.00321, 37.524389],
        },
        properties: {
          balloonContent: "аббакумумово 92 метра",
          clusterCaption: "Метка 2",
          hintContent: "аббакумумово 92 метра",
        },
      },
      {
        type: "Feature",
        id: 106,
        geometry: {
          type: "Point",
          coordinates: [56.405096, 37.499893],
        },
        properties: {
          balloonContent: "Дмитровский р-н СНТ Теплотехник 116 метров",
          clusterCaption: "Метка 2",
          hintContent: "Дмитровский р-н СНТ Теплотехник 116 метров",
        },
      },
      {
        type: "Feature",
        id: 107,
        geometry: {
          type: "Point",
          coordinates: [56.301818, 37.432915],
        },
        properties: {
          balloonContent: "Ватутинки, д.Яковлево 100 метра",
          clusterCaption: "Метка 2",
          hintContent: "Ватутинки, д.Яковлево 100 метра",
        },
      },
      {
        type: "Feature",
        id: 108,
        geometry: {
          type: "Point",
          coordinates: [55.598085, 37.171864],
        },
        properties: {
          balloonContent: "Кокошкино 69 метров",
          clusterCaption: "Метка 2",
          hintContent: "Кокошкино 69 метров",
        },
      },
      {
        type: "Feature",
        id: 109,
        geometry: {
          type: "Point",
          coordinates: [55.152552, 37.617249],
        },
        properties: {
          balloonContent: "Соколинавя гора 50 метров",
          clusterCaption: "Метка 2",
          hintContent: "Соколинавя гора 50 метров",
        },
      },
      {
        type: "Feature",
        id: 110,
        geometry: {
          type: "Point",
          coordinates: [55.704768, 38.066757],
        },
        properties: {
          balloonContent: "КП Романово Лайф 33 метра",
          clusterCaption: "Метка 2",
          hintContent: "КП Романово Лайф 33 метра",
        },
      },
      {
        type: "Feature",
        id: 111,
        geometry: {
          type: "Point",
          coordinates: [55.291203, 37.117435],
        },
        properties: {
          balloonContent: "Вороновское пос. д.Семенково 47 метра",
          clusterCaption: "Метка 2",
          hintContent: "Вороновское пос. д.Семенково 47 метра",
        },
      },
      {
        type: "Feature",
        id: 112,
        geometry: {
          type: "Point",
          coordinates: [55.813465, 37.079724],
        },
        properties: {
          balloonContent: "Истринский р-н Павловская слобода 83 метра",
          clusterCaption: "Метка 2",
          hintContent: "Истринский р-н Павловская слобода 83 метра",
        },
      },
      {
        type: "Feature",
        id: 113,
        geometry: {
          type: "Point",
          coordinates: [55.542309, 37.395572],
        },
        properties: {
          balloonContent: "Снт Ракитки 28 метра",
          clusterCaption: "Метка 2",
          hintContent: "Снт Ракитки 28 метра",
        },
      },
      {
        type: "Feature",
        id: 114,
        geometry: {
          type: "Point",
          coordinates: [55.309627, 36.509878],
        },
        properties: {
          balloonContent: "Снт Мечта 70 метров",
          clusterCaption: "Метка 2",
          hintContent: "Снт Мечта 70 метров",
        },
      },
      {
        type: "Feature",
        id: 115,
        geometry: {
          type: "Point",
          coordinates: [55.542319, 37.395582],
        },
        properties: {
          balloonContent: "СНТ Ракитки 39 метра",
          clusterCaption: "Метка 2",
          hintContent: "СНТ Ракитки 39 метра",
        },
      },
      {
        type: "Feature",
        id: 116,
        geometry: {
          type: "Point",
          coordinates: [55.931583, 36.896593],
        },
        properties: {
          balloonContent: "Истринский р-н Рычково 95 метров",
          clusterCaption: "Метка 2",
          hintContent: "Истринский р-н Рычково 95 метров",
        },
      },
      {
        type: "Feature",
        id: 117,
        geometry: {
          type: "Point",
          coordinates: [55.534872, 37.455067],
        },
        properties: {
          balloonContent: "Ямонтово 74 метра",
          clusterCaption: "Метка 2",
          hintContent: "Ямонтово 74 метра",
        },
      },
      {
        type: "Feature",
        id: 118,
        geometry: {
          type: "Point",
          coordinates: [55.778664, 37.048247],
        },
        properties: {
          balloonContent: "Чесноково 102 метров",
          clusterCaption: "Метка 2",
          hintContent: "Чесноково 102 метров",
        },
      },
      {
        type: "Feature",
        id: 119,
        geometry: {
          type: "Point",
          coordinates: [55.886887, 36.761029],
        },
        properties: {
          balloonContent: "Киселево 51 метра",
          clusterCaption: "Метка 2",
          hintContent: "Киселево 51 метра",
        },
      },
      {
        type: "Feature",
        id: 120,
        geometry: {
          type: "Point",
          coordinates: [55.222503, 37.357106],
        },
        properties: {
          balloonContent: "Слепушкино Чеховский р-он 38 метров",
          clusterCaption: "Метка 2",
          hintContent: "Слепушкино Чеховский р-он 38 метров",
        },
      },
      {
        type: "Feature",
        id: 121,
        geometry: {
          type: "Point",
          coordinates: [55.218025, 36.26409],
        },
        properties: {
          balloonContent: "М.О. Наро-Фоминский д.Ефаново 60 метра",
          clusterCaption: "Метка 2",
          hintContent: "М.О. Наро-Фоминский д.Ефаново 60 метра",
        },
      },
      {
        type: "Feature",
        id: 122,
        geometry: {
          type: "Point",
          coordinates: [55.238593, 37.795151],
        },
        properties: {
          balloonContent: "Матчино-парк 41 метр",
          clusterCaption: "Метка 2",
          hintContent: "Матчино-парк 41 метр",
        },
      },
      {
        type: "Feature",
        id: 123,
        geometry: {
          type: "Point",
          coordinates: [55.555072, 37.241771],
        },
        properties: {
          balloonContent: "д.Акиншино 55 метров",
          clusterCaption: "Метка 2",
          hintContent: "д.Акиншино 55 метров",
        },
      },
      {
        type: "Feature",
        id: 124,
        geometry: {
          type: "Point",
          coordinates: [55.805842, 38.981601],
        },
        properties: {
          balloonContent: "Орехово зуево 70 метров",
          clusterCaption: "Метка 2",
          hintContent: "Орехово зуево 70 метров",
        },
      },
      {
        type: "Feature",
        id: 124,
        geometry: {
          type: "Point",
          coordinates: [55.783539, 38.994663],
        },
        properties: {
          balloonContent: "деревня Дровосеки 50 метров",
          clusterCaption: "Метка 2",
          hintContent: "деревня Дровосеки 50 метров",
        },
      },
      {
        type: "Feature",
        id: 124,
        geometry: {
          type: "Point",
          coordinates: [55.78855, 39.057024],
        },
        properties: {
          balloonContent: "посёлок Тополиный 70 метров",
          clusterCaption: "Метка 2",
          hintContent: "посёлок Тополиный 70 метров",
        },
      },
      {
        type: "Feature",
        id: 124,
        geometry: {
          type: "Point",
          coordinates: [55.617144, 36.862386],
        },
        properties: {
          balloonContent: "посёлок Часцы 70 метров",
          clusterCaption: "Метка 2",
          hintContent: "посёлок Часцы 70 метров",
        },
      },
      {
        type: "Feature",
        id: 124,
        geometry: {
          type: "Point",
          coordinates: [55.648494, 36.96403],
        },
        properties: {
          balloonContent: "деревня Захарово 57 метров",
          clusterCaption: "Метка 2",
          hintContent: "деревня Захарово 57 метров",
        },
      },
      {
        type: "Feature",
        id: 124,
        geometry: {
          type: "Point",
          coordinates: [55.918666, 38.067565],
        },
        properties: {
          balloonContent: "деревня Кожино 38 метров",
          clusterCaption: "Метка 2",
          hintContent: "деревня Кожино 38 метров",
        },
      },
      {
        type: "Feature",
        id: 124,
        geometry: {
          type: "Point",
          coordinates: [55.581261, 38.257415],
        },
        properties: {
          balloonContent: "деревня Дергаево 90 метров",
          clusterCaption: "Метка 2",
          hintContent: "деревня Дергаево 90 метров",
        },
      },
      {
        type: "Feature",
        id: 124,
        geometry: {
          type: "Point",
          coordinates: [55.052025, 37.573672],
        },
        properties: {
          balloonContent: "деревня Еськино 65 метров",
          clusterCaption: "Метка 2",
          hintContent: "деревня Еськино 65 метров",
        },
      },
      {
        type: "Feature",
        id: 124,
        geometry: {
          type: "Point",
          coordinates: [55.096203, 37.4091],
        },
        properties: {
          balloonContent: "деревня Поповка 61 метр",
          clusterCaption: "Метка 2",
          hintContent: "деревня Поповка 61 метр",
        },
      },
      {
        type: "Feature",
        id: 124,
        geometry: {
          type: "Point",
          coordinates: [55.354323, 37.642824],
        },
        properties: {
          balloonContent: "СНТ Рябинушка 46 метров",
          clusterCaption: "Метка 2",
          hintContent: "СНТ Рябинушка 46 метров",
        },
      },
      {
        type: "Feature",
        id: 124,
        geometry: {
          type: "Point",
          coordinates: [55.661008, 37.852617],
        },
        properties: {
          balloonContent: "Котельники 107 метров",
          clusterCaption: "Метка 2",
          hintContent: "Котельники 107 метров",
        },
      },
      {
        type: "Feature",
        id: 124,
        geometry: {
          type: "Point",
          coordinates: [55.584024, 35.873844],
        },
        properties: {
          balloonContent: "деревня Красновидово 95 метров",
          clusterCaption: "Метка 2",
          hintContent: "деревня Красновидово 95 метров",
        },
      },
      {
        type: "Feature",
        id: 124,
        geometry: {
          type: "Point",
          coordinates: [55.209026, 37.714474],
        },
        properties: {
          balloonContent: "деревня Степыгино 70 метров",
          clusterCaption: "Метка 2",
          hintContent: "деревня Степыгино 70 метров",
        },
      },
      {
        type: "Feature",
        id: 124,
        geometry: {
          type: "Point",
          coordinates: [55.096682, 37.430696],
        },
        properties: {
          balloonContent: "деревня Гришенки 61 метр",
          clusterCaption: "Метка 2",
          hintContent: "деревня Гришенки 61 метр",
        },
      },
      {
        type: "Feature",
        id: 124,
        geometry: {
          type: "Point",
          coordinates: [55.26327, 37.893113],
        },
        properties: {
          balloonContent: "Барыбино 50 метров",
          clusterCaption: "Метка 2",
          hintContent: "Барыбино 50 метров",
        },
      },
      {
        type: "Feature",
        id: 124,
        geometry: {
          type: "Point",
          coordinates: [56.031171, 35.510394],
        },
        properties: {
          balloonContent: "рабочий посёлок Шаховская 94 метров",
          clusterCaption: "Метка 2",
          hintContent: "рабочий посёлок Шаховская 94 метров",
        },
      },
      {
        type: "Feature",
        id: 124,
        geometry: {
          type: "Point",
          coordinates: [55.199748, 36.551533],
        },
        properties: {
          balloonContent: "деревня Николаевка 70 метров",
          clusterCaption: "Метка 2",
          hintContent: "деревня Николаевка 70 метров",
        },
      },
      {
        type: "Feature",
        id: 124,
        geometry: {
          type: "Point",
          coordinates: [55.199745, 36.551531],
        },
        properties: {
          balloonContent: "деревня Николаевка 61 метров",
          clusterCaption: "Метка 2",
          hintContent: "деревня Николаевка 61 метров",
        },
      },
      {
        type: "Feature",
        id: 124,
        geometry: {
          type: "Point",
          coordinates: [55.610463, 38.746503],
        },
        properties: {
          balloonContent: "деревня Чисто-Перхурово 97 метров",
          clusterCaption: "Метка 2",
          hintContent: "деревня Чисто-Перхурово 97  метров",
        },
      },
      {
        type: "Feature",
        id: 124,
        geometry: {
          type: "Point",
          coordinates: [55.221821, 37.834112],
        },
        properties: {
          balloonContent: "деревня Барыбино 47 метров",
          clusterCaption: "Метка 2",
          hintContent: "деревня Барыбино 47 метров",
        },
      },
      {
        type: "Feature",
        id: 124,
        geometry: {
          type: "Point",
          coordinates: [55.990302, 38.542469],
        },
        properties: {
          balloonContent: "деревня Боровково 51 метров",
          clusterCaption: "Метка 2",
          hintContent: "деревня Боровково 51 метров",
        },
      },
      {
        type: "Feature",
        id: 124,
        geometry: {
          type: "Point",
          coordinates: [55.673808, 37.03912],
        },
        properties: {
          balloonContent: "посёлок Назарьево 109 метров",
          clusterCaption: "Метка 2",
          hintContent: "посёлок Назарьево 109 метров",
        },
      },
      {
        type: "Feature",
        id: 124,
        geometry: {
          type: "Point",
          coordinates: [55.134193, 37.619899],
        },
        properties: {
          balloonContent: "коттеджный посёлок Сосновый Аромат 38 метров",
          clusterCaption: "Метка 2",
          hintContent: "коттеджный посёлок Сосновый Аромат 38 метров",
        },
      },
      {
        type: "Feature",
        id: 124,
        geometry: {
          type: "Point",
          coordinates: [55.805842, 38.981601],
        },
        properties: {
          balloonContent: "Орехово зуево 70 метров",
          clusterCaption: "Метка 2",
          hintContent: "Орехово зуево 70 метров",
        },
      },
      {
        type: "Feature",
        id: 124,
        geometry: {
          type: "Point",
          coordinates: [55.136097, 38.40341],
        },
        properties: {
          balloonContent: "деревня Мякинино 70 метров",
          clusterCaption: "Метка 2",
          hintContent: "деревня Мякинино 70 метров",
        },
      },
      {
        type: "Feature",
        id: 124,
        geometry: {
          type: "Point",
          coordinates: [55.29088, 37.749283],
        },
        properties: {
          balloonContent: "деревня Курганье 43 метра",
          clusterCaption: "Метка 2",
          hintContent: "деревня Курганье 43 метра",
        },
      },
      {
        type: "Feature",
        id: 124,
        geometry: {
          type: "Point",
          coordinates: [55.502727, 38.445469],
        },
        properties: {
          balloonContent: "СНТ Вымпел-2 76 метров",
          clusterCaption: "Метка 2",
          hintContent: "СНТ Вымпел-2 76 метров",
        },
      },
      {
        type: "Feature",
        id: 124,
        geometry: {
          type: "Point",
          coordinates: [55.58121, 36.855891],
        },
        properties: {
          balloonContent: "коттеджный посёлок Зелёная Роща-1 70 метров",
          clusterCaption: "Метка 2",
          hintContent: "коттеджный посёлок Зелёная Роща-1 70 метров",
        },
      },
    ],
  });
}
