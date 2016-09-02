requirejs.config({
  baseUrl: 'js',
  paths: {
    jquery: 'libs/jquery',
    jqueryUI: 'libs/jquery-ui',
    scrollBar: 'libs/jquery.mCustomScrollbar',
    swiper: 'libs/swiper',
    mouseWheel: 'libs/jquery.mousewheel',
    lodash: 'libs/lodash.min',
    pubsub: 'libs/pubsub',
    promise: 'libs/q',
    text: 'libs/text',
    sunController: 'components/sun/sunController',
    sun: 'helpers/sun',
    backgroundChanging: 'util/backgroundChanging',
    bgAndSun: 'util/bgAndSun',
    scrollers: 'util/scrollBar',
    swiperInit: 'util/swiper',
    dragNdrop: 'util/dragNdrop',
    temperatureMinMaxPositionChanging: 'util/temperatureMinMaxPositionChanging',
    anyVendor: 'vendors/anyVendor',
    forecast: 'vendors/forecast',
    googleVendor: 'vendors/googleVendor',
    init: 'init/init',
    calculationSun: 'Components/Sun/calculationSun',
    sunAnimation: 'Components/Sun/sunAnimation',
    timeForSun: 'Components/Sun/timeForSun',
    cityController: 'Components/Slide/cityController',
    cityModel: 'Components/Slide/cityModel',
    cityView: 'Components/Slide/slideView',
    slideHTML: 'Components/Slide/slide.html',
    sidebarView: 'Components/sideBar/sidebarView',
    weekWeatherView : 'Components/settings/weekWeatherView',
    settingsController: 'Components/settings/settingsController',
    settingsModel: 'Components/settings/settingsModel',
    settingsView: 'Components/settings/settingsView',
    TypeOfTemperatureView: 'Components/settings/TypeOfTemperatureView',
    GallaryController : 'Components/Gallary/GallaryController',
    GarbageView : 'Components/Gallary/GarbageView',
    emptyPageView : 'Components/emptyPage/emptyPageView',
    cityCollectionController : 'Components/cityCollection/cityCollectionController',
    collectionModel : 'Components/cityCollection/cityCollectionModel',
    collectionView : 'Components/cityCollection/cityCollectionView',
    collectionHTML :'Components/cityCollection/cityPlaceHTML.html',
    autoCompleteController : 'Components/autoComplete/autoCompleteController',
    autoCompleteView : 'Components/autoComplete/autoCompleteView',
    autoCompleteHTML: 'Components/autoComplete/autocompleteHTML.html',
    emptyPageHTML : 'Components/emptyPage/emptyPageHTML.html',
    sidebarHTML : 'Components/sideBar/sidebarHTML.html'
  },
  shim : {
    jqueryUI : { deps : ['jquery'] },
    scrollBar : { deps : ['jquery', 'mouseWheel'] }
  }
});

require(['init']);
