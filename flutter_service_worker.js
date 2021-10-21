'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "d8425b856297cfc6e0ecb7b1f002509d",
"manifest.json": "010f129b3b174dde9a468793a6ccb6c2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "c65f29d5b3881286d36cac8ce5521b64",
"assets/AssetManifest.json": "c6e64d058c6a63859191f3f56705ee11",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/thumb/d2thumb.jpg": "7ab3418b540ab19e2de1b7d17ff39d2d",
"assets/images/thumb/20211010_140914_HDR_Thumb.jpg": "ad23b5641ebb33b4f3d7bf5974fb81aa",
"assets/images/thumb/20211010_140226_HDR_Thumb.jpg": "bd2f63b07f587caa28de9aab3151b439",
"assets/images/thumb/20211010_134954_HDR_Thumb.jpg": "7e26c99c006e2ee8ec9902922fdf217e",
"assets/images/thumb/20211003_135914_Thumb.jpg": "096c50440a5334e855c64b9c37239d85",
"assets/images/thumb/pic7thumb.jpg": "9c790a944bccac07a1a8e4a49aab01d2",
"assets/images/thumb/20211003_131117_Thumb.jpg": "31119c6357d725b245388ca24051e7b9",
"assets/images/thumb/20211010_141600_HDR_Thumb.jpg": "53bfc2e3a91c35ee8e1cf5953300f885",
"assets/images/thumb/20211010_124209_Thumb.jpg": "dd89dd1f1f1c5f2361e3141a8eca07a3",
"assets/images/thumb/pic1-1thumb.jpg": "4179c574268e7e56db9b1cb0e39b0469",
"assets/images/thumb/20211010_140908_HDR_Thumb.jpg": "d13a86147f5f03860f80ca27444808f3",
"assets/images/thumb/20211010_140035_Thumb.jpg": "51d06c962e44c2acbe50185b75026d5c",
"assets/images/thumb/20211010_122551_HDR_Thumb.jpg": "fee241157f0d18a2b3606106618d8481",
"assets/images/thumb/20211010_134950_Thumb.jpg": "369df3d23814d317c26b742ccbc0f96b",
"assets/images/thumb/20211010_144813_Burst01_Thumb.jpg": "55819d3fed0f2b1797cfb8cc089e59db",
"assets/images/thumb/20211010_132044_Thumb.jpg": "84a53cca975c41bd6e981a1743a39e2e",
"assets/images/thumb/20211010_140039_HDR_Thumb.jpg": "d4e6c1962d4036892af33050a5e01cb6",
"assets/images/thumb/d5thumb.jpg": "40c36c6fbc615e959eb872a785d933b5",
"assets/images/thumb/20211010_164850_Thumb.jpg": "a755ee7a59e5385d23d828648b0c9862",
"assets/images/thumb/20211010_133147_HDR_Thumb.jpg": "030677477e4bd39ddc6abf351c7cde31",
"assets/images/thumb/pic4thumb.jpg": "a3a1212ab193523eadd944310b29a946",
"assets/images/thumb/d6thumb.jpg": "7118a39bc7091b878dfb3d61191e389d",
"assets/images/thumb/20211010_140044_Thumb.jpg": "51484f617acbc8ab9d90ed38f87893f4",
"assets/images/thumb/20211003_140018_Thumb.jpg": "3386c8ee0605606c6ae6ef6a63f6e388",
"assets/images/thumb/20211010_141553_HDR_Thumb.jpg": "320959e7efd9d50b5d91f053d1010ca4",
"assets/images/thumb/20211010_135534_HDR_Thumb.jpg": "6547a9b5bcc8efa0c54004d8fa3453f0",
"assets/images/thumb/20211010_144834_HDR_Thumb.jpg": "9b8ac26e26a2ba30d9154dd96d2a58dd",
"assets/images/thumb/20211010_164848_Thumb.jpg": "079daf4c5c7b814c9fdddc9138926769",
"assets/images/thumb/20211010_134037_HDR_Thumb.jpg": "36befeaa8af8f07b5b2a40962581bde7",
"assets/images/thumb/20211010_135537_HDR_Thumb.jpg": "eb6c5a889f65ea46e86092d81648ca6a",
"assets/images/thumb/20211003_135933_Thumb.jpg": "96cf47c0c27e707e8743db21e0768619",
"assets/images/thumb/20211010_140206_HDR_Thumb.jpg": "d968b24f73e51583a0251806f179815b",
"assets/images/thumb/p5thumb.jpg": "62c45df29e7fc9236fb71e414b5005e0",
"assets/images/thumb/d1thumb.jpg": "b14065d936a0e220a8f44827afac3b31",
"assets/images/thumb/p3thumb.jpg": "7e5c8136b28e0cab8ea12d9568a95b11",
"assets/images/thumb/20211010_132048_Thumb.jpg": "cee72398c05401edbf9fe080b7575db5",
"assets/images/thumb/20211003_135935_Thumb.jpg": "d17b4d4bfb6dd81bd1a70a47dac37fd0",
"assets/images/thumb/p2thumb.jpg": "1cc844abe2eba10d268742e2a47db14f",
"assets/images/thumb/20211010_125219_Burst01_Thumb.jpg": "6182a59c079d7361467c29859cf1898e",
"assets/images/thumb/d10thumb.jpg": "ceefcb1d26bd8d011f74a0114844d13d",
"assets/images/thumb/p1thumb.jpg": "0679cac8dce4825fa77a5a11bdc1a689",
"assets/images/thumb/20211010_122420_HDR_Thumb.jpg": "d72ed5c01814f4d0692c39ae72c892c3",
"assets/images/thumb/20211010_133407_HDR_Thumb.jpg": "fd8b29a9687d78f7b59e7105161112a6",
"assets/images/thumb/20211010_144838_HDR_Thumb.jpg": "7e05dcd4fa373ef618791ae1c89b7625",
"assets/images/thumb/20211010_124216_Thumb.jpg": "98eb8309111e96da4c187a66053c3b01",
"assets/images/thumb/d9thumb.jpg": "7d21221a877b7108558a60f4fde5476d",
"assets/images/thumb/20211010_164841_Thumb.jpg": "b07606115da2456dd6d6a2b40b7ce97e",
"assets/images/thumb/20211010_135110_HDR_Thumb.jpg": "0fedbc15598ca9e0dc96abe6265eb542",
"assets/images/thumb/20211010_141107_HDR_Thumb.jpg": "7ef34af16536eed77fcb6db0de0ec532",
"assets/images/thumb/20211010_135004_HDR_Thumb.jpg": "a08a6f739efaff05e30b99f818ca8495",
"assets/images/thumb/20211003_131052_Thumb.jpg": "91d35529393d7cd266e779caa8b833e3",
"assets/images/thumb/pic10thumb.jpg": "93645b086c6115823f604ff7bed8127b",
"assets/images/thumb/20211010_135116_HDR_Thumb.jpg": "60fd2ae87cc0f17991896eb6d0f222fc",
"assets/images/thumb/20211010_164844_Thumb.jpg": "5788875df12f9364fa222e402c5548b5",
"assets/images/thumb/20211010_125938_HDR_Thumb.jpg": "ed1890c6afede7f3dc07b568bcb9934d",
"assets/images/thumb/d7thumb.jpg": "47f4f6e54e8c59019b78457a859acd5a",
"assets/images/thumb/pic9thumb.jpg": "4018139ca9fe6a628b4c734dd35d0664",
"assets/images/thumb/d4thumb.jpg": "d76c9d99f500f09fa55de739c36bc6e3",
"assets/images/thumb/20211010_125227_Thumb.jpg": "289512f9adca94569b14ae85e7a77bbe",
"assets/images/thumb/20211010_134959_HDR_Thumb.jpg": "75993b1b881d97a3917dff249ec0ba32",
"assets/images/thumb/p4thumb.jpg": "b92e6992e6461380d9d69ca9fd99cda6",
"assets/images/thumb/20211010_133427_HDR_Thumb.jpg": "ce84937def024f05d6ef29fbdf69902a",
"assets/images/thumb/20211010_122608_HDR_Thumb.jpg": "757b27ab0f0703b93d96b5eb123e9de4",
"assets/images/thumb/20211010_134023_HDR_Thumb.jpg": "4f6ee4c62146a168b171e56e73ab6d7b",
"assets/images/thumb/20211010_141105_HDR_Thumb.jpg": "9e0d9081aa25cc08f3fff38e29d591d2",
"assets/images/thumb/20211010_135105_HDR_Thumb.jpg": "3be63ed72dd84b1a0aa1229c488d5bdb",
"assets/images/thumb/pic3-1thumb.jpg": "95044896f1705b7762ad977874b5d5b4",
"assets/images/thumb/20211010_125926_Thumb.jpg": "b7aead54734611818bcb149cf3762f98",
"assets/images/thumb/20211010_140213_HDR_Thumb.jpg": "8ff19ec7b26fbe4c57e423a18e0188f1",
"assets/images/thumb/20211010_140059_HDR_Thumb.jpg": "2ec90c7c1443965834799bf480aaaff7",
"assets/images/thumb/20211003_131040_Thumb.jpg": "f96c770919be707ad40dadbe167e1a0d",
"assets/images/thumb/20211010_133420_HDR_Thumb.jpg": "94f91aa3b02326debea4fc4a3faf36b0",
"assets/images/thumb/20211010_141549_HDR_Thumb.jpg": "0e7559c921b4217fd206d3089b847365",
"assets/images/thumb/20211010_141555_HDR_Thumb.jpg": "277ff7c4e7755abd184e4101990c178a",
"assets/images/thumb/pic5thumb.jpg": "adaf0e01ae4c216d29aebf63968ad6ab",
"assets/images/thumb/20211010_140027_HDR_Thumb.jpg": "b4420138ef5f440166ccf5d326dea9fe",
"assets/images/thumb/20211010_140219_HDR_Thumb.jpg": "1b479250fb4d6cbd73f6e949057d13d5",
"assets/images/thumb/20211010_135541_HDR_Thumb.jpg": "a9904f5f56586535a8891a940e16baf4",
"assets/images/thumb/20211010_122603_HDR_Thumb.jpg": "11119f074775e5a20d9ca97fe3d3de5e",
"assets/images/thumb/20211010_122438_HDR_Thumb.jpg": "cf6a466f773ac6d2e4fff9de0956a9ec",
"assets/images/thumb/20211003_131139_Thumb.jpg": "47b074c968cef442402e047702c981d4",
"assets/images/thumb/pic8thumb.jpg": "917632ae2657632eb69e8fbc7d8c73c3",
"assets/images/thumb/d8thumb.jpg": "aafe36c012423f85aa1c21eae561a89c",
"assets/images/thumb/20211010_124206_Thumb.jpg": "faf376f39912184025fffd9a9d591108",
"assets/images/thumb/20211010_122611_Thumb.jpg": "4f42e216922204c8665e277b7a29a33a",
"assets/images/thumb/20211010_133144_HDR_Thumb.jpg": "d20f52f7f698a276884130df5d7ef9d0",
"assets/images/thumb/20211010_122621_HDR_Thumb.jpg": "c96379e3cbf82ecc1f5d388ad07466c5",
"assets/images/thumb/20211010_133432_HDR_Thumb.jpg": "77569b17fa16e6609bf2b312ac57b422",
"assets/images/thumb/20211010_134028_HDR_Thumb.jpg": "c1f65a7799b07a0f788787469dc13c40",
"assets/images/thumb/20211010_140049_HDR_Thumb.jpg": "f3aa8a0abf08ca3e0e7d2b4bfe4261e4",
"assets/images/thumb/pic12thumb.jpg": "be8e4da8290fbd2d1bcd49d3e1846bb2",
"assets/images/thumb/pic2-1thumb.jpg": "8e331556f48a0cb4ecd4ee32ec76b9cc",
"assets/images/thumb/20211010_125208_Burst01_Thumb.jpg": "6d9d9186ae7e415b48dcf8418a83d7b9",
"assets/images/thumb/20211010_135059_HDR_Thumb.jpg": "be81ed1d4179e50e9287a0a5b9e87790",
"assets/images/thumb/20211010_133142_HDR_Thumb.jpg": "d9d66ecaa9ce7a3453a2532224026415",
"assets/images/thumb/20211010_133151_HDR_Thumb.jpg": "dcf015bd2ccd494a17e8b23a31fc2433",
"assets/images/circalthumb/TexasTripCThumb.png": "7a21b4136f5c55d4455c1c4b3016fa16",
"assets/images/circalthumb/d1CThumb.png": "df62cb008a279975f2aac3c67ac6c4ca",
"assets/images/circalthumb/p4CThumb.png": "76bc414295900e15a574d246f915015f",
"assets/images/TexasTrip/20211010/20211010_122603_HDR2.jpg": "403d3d1cdbbfccd10986bbdb5d7b99dc",
"assets/images/TexasTrip/20211010/20211010_164850-2.jpg": "a6527eb6a18c4f9e9b716332a817edbb",
"assets/images/TexasTrip/20211010/20211010_133407_HDR2.jpg": "020a776cf1c33ccb25b00b0d0b02314d",
"assets/images/TexasTrip/20211010/20211010_164844-2.jpg": "e93c24bd87a788bd89adb5bc909ac9bf",
"assets/images/TexasTrip/20211010/20211010_134959_HDR2.jpg": "4c387c2d000151b59f8b3ea90d3d74a4",
"assets/images/TexasTrip/20211010/20211010_141553_HDR2.jpg": "71f32bcf2761f549c74a2c3c2b7cfae2",
"assets/images/TexasTrip/20211010/20211010_141555_HDR2.jpg": "321802d4164f7701aa29b413b6d86f22",
"assets/images/TexasTrip/20211010/20211010_122608_HDR2.jpg": "35d28b05baf48e51dfc02e7a55069338",
"assets/images/TexasTrip/20211010/20211010_122551_HDR2.jpg": "9c2fd298bd385b7693c8846cef64c814",
"assets/images/TexasTrip/20211010/20211010_125926-2.jpg": "d6ce0f011ae019ea473c96ab8ae91f8b",
"assets/images/TexasTrip/20211010/20211010_141107_HDR2.jpg": "e1957f3f16941ee091e5a8140f11ad7a",
"assets/images/TexasTrip/20211010/20211010_144834_HDR2.jpg": "db1a21dd2f5c911a34835eb2c2e5aea0",
"assets/images/TexasTrip/20211010/20211010_140027_HDR2.jpg": "04905fdd48d37bd650a403419af99b5b",
"assets/images/TexasTrip/20211010/20211010_133420_HDR2.jpg": "86b209563c4b6cf4e4582532f3dd2fde",
"assets/images/TexasTrip/20211010/20211010_133147_HDR2.jpg": "f71b93641cb065888d29b31d42371fc0",
"assets/images/TexasTrip/20211010/20211010_132048-2.jpg": "d0dcad0ad379efadf4942606be769234",
"assets/images/TexasTrip/20211010/20211010_134023_HDR2.jpg": "931d187cb9ec808de54cc013e1dead48",
"assets/images/TexasTrip/20211010/20211010_132044-2.jpg": "47fc2f94adea36696d7ad8c9db7d377e",
"assets/images/TexasTrip/20211010/20211010_122621_HDR2.jpg": "ed0b0dc0b798c214553caec55ad4d1fd",
"assets/images/TexasTrip/20211010/20211010_135004_HDR2.jpg": "5567b5ed9f8baedb9e9c7b6bc77db2dd",
"assets/images/TexasTrip/20211010/20211010_140206_HDR2.jpg": "58cf556682ef8950fe54ac81047d0026",
"assets/images/TexasTrip/20211010/20211010_164848-2.jpg": "1f9bb449a80293fd3ab92cec7ba9d5a9",
"assets/images/TexasTrip/20211010/20211010_135541_HDR2.jpg": "64329b8a6dd90e9cb3d75d3795a377f3",
"assets/images/TexasTrip/20211010/20211010_135534_HDR2.jpg": "e972b8b63ab84d85bb2957acacac36c9",
"assets/images/TexasTrip/20211010/20211010_122611-2.jpg": "90cbef83132f466a3e003639202f943f",
"assets/images/TexasTrip/20211010/20211010_141600_HDR2.jpg": "51631fe11fdbc38e15b6a7c81d1c406b",
"assets/images/TexasTrip/20211010/20211010_134954_HDR2.jpg": "265263a98abc7513ee289074bc4f2ee3",
"assets/images/TexasTrip/20211010/20211010_133432_HDR2.jpg": "cfe324ea02f97f3b3eb60407112ebae1",
"assets/images/TexasTrip/20211010/20211010_140914_HDR2.jpg": "43f6d7dc5dc07f05ed809102d5fbd554",
"assets/images/TexasTrip/20211010/20211010_122438_HDR2.jpg": "c3a80ca4bf3ce456390ed09aebe1a42e",
"assets/images/TexasTrip/20211010/20211010_141549_HDR2.jpg": "82885fed75c8d2342f7994eece0ed40f",
"assets/images/TexasTrip/20211010/20211010_134037_HDR2.jpg": "e220128cf33d0cf166871b5c2bbc897c",
"assets/images/TexasTrip/20211010/20211010_140219_HDR2.jpg": "8b677594a121031452d3cbca75f57c82",
"assets/images/TexasTrip/20211010/20211010_140908_HDR2.jpg": "91727ac0d6d068b05d43ac8b420e6090",
"assets/images/TexasTrip/20211010/20211010_140059_HDR2.jpg": "3a5030d07c0681736bfd328d471a2267",
"assets/images/TexasTrip/20211010/20211010_135105_HDR2.jpg": "b0f3b8fa8313289e0309851fbcf1f685",
"assets/images/TexasTrip/20211010/20211010_140039_HDR2.jpg": "e3bcd0c3690bf91e66fb18dc78f7030c",
"assets/images/TexasTrip/20211010/20211010_140049_HDR2.jpg": "40de9a8cf3c1199e943510fdbfac5ba5",
"assets/images/TexasTrip/20211010/20211010_133144_HDR2.jpg": "002ce6eaa9e6ff8ba7fa5ffeed661f43",
"assets/images/TexasTrip/20211010/20211010_140226_HDR2.jpg": "b4242d5aa78bbf4563465d623d6f41f5",
"assets/images/TexasTrip/20211010/20211010_144838_HDR2.jpg": "230355cb20e1dadaf78cc059e1cb87fd",
"assets/images/TexasTrip/20211010/20211010_134950-2.jpg": "71dc5b8bdfb4337214b18aae5650cd9e",
"assets/images/TexasTrip/20211010/20211010_125208_Burst01-2.jpg": "26b91154217320fdcd9dbf4aed982443",
"assets/images/TexasTrip/20211010/20211010_135116_HDR2.jpg": "b2312baacfbec5c91bff2a5a5be4566e",
"assets/images/TexasTrip/20211010/20211010_133151_HDR2.jpg": "3a476998ee09d8f8eee1359d7b401762",
"assets/images/TexasTrip/20211010/20211010_135537_HDR2.jpg": "95ca14a657f1aedc4b0bc7b0e9abde64",
"assets/images/TexasTrip/20211010/20211010_140035-2.jpg": "238c0a6581d453123a96908976d59ec1",
"assets/images/TexasTrip/20211010/20211010_124206-2.jpg": "00de02497d176d7b429dc93bedd50b36",
"assets/images/TexasTrip/20211010/20211010_125219_Burst01-2.jpg": "8a638ba3295ba82f3c22b7b6750731cc",
"assets/images/TexasTrip/20211010/20211010_124216-2.jpg": "87f7db9d3b11432adb3a2d081c8a5f71",
"assets/images/TexasTrip/20211010/20211010_134028_HDR2.jpg": "fa4323a4e8bb3abc99e93fb0d011caf0",
"assets/images/TexasTrip/20211010/20211010_135110_HDR2.jpg": "43bedc31bdc02b60b5fb170c2c0ffe09",
"assets/images/TexasTrip/20211010/20211010_133427_HDR2.jpg": "38ea3de7bf7962fefd5361b99f226f6a",
"assets/images/TexasTrip/20211010/20211010_124209-2.jpg": "8acd3c43fb96b4af38b864b009924115",
"assets/images/TexasTrip/20211010/20211010_135059_HDR2.jpg": "045a6f50ab17f2285e242cd17f14c7ac",
"assets/images/TexasTrip/20211010/20211010_125227-2.jpg": "12b07d2f418bfb664a511ef20c6c5a4b",
"assets/images/TexasTrip/20211010/20211010_140044-2.jpg": "56d08c4f79e1d6b4b2c6785df6e0c4b3",
"assets/images/TexasTrip/20211010/20211010_122420_HDR2.jpg": "62b7789234635a1cf622e7e0307f2816",
"assets/images/TexasTrip/20211010/20211010_140213_HDR2.jpg": "3ed33bf4f216e84f42742f581d635fe3",
"assets/images/TexasTrip/20211010/20211010_164841-2.jpg": "acb3fcb6762b75551da5677eabf936e0",
"assets/images/TexasTrip/20211010/20211010_144813_Burst01-2.jpg": "e83940790dcb816f95918f4fa700e30b",
"assets/images/TexasTrip/20211010/20211010_141105_HDR2.jpg": "d80ae955214779d82f7a3510495a5f3b",
"assets/images/TexasTrip/20211010/20211010_125938_HDR2.jpg": "2371ff5020739df37b420a8642812a68",
"assets/images/TexasTrip/20211003/20211003_135933-2.jpg": "525c881f5a5cba12da23b8777c02f5d3",
"assets/images/TexasTrip/20211003/20211003_135914-2.jpg": "768d93f0c5e844a35250a4059162ea65",
"assets/images/TexasTrip/20211003/20211003_131117-2.jpg": "195bf007064cc69c40d729cb58da1446",
"assets/images/TexasTrip/20211003/20211003_131040-2.jpg": "b979ac0c9988e7e9ea22ec4c49f0c111",
"assets/images/TexasTrip/20211003/20211003_140018-2.jpg": "94adbbe8c152d8e94edaecdacce972ef",
"assets/images/TexasTrip/20211003/20211003_131139-2.jpg": "f5799ec35292e2a130f9a56f249295e4",
"assets/images/TexasTrip/20211003/20211003_131052-2.jpg": "59783147b79be96d0331ef79712edfe7",
"assets/images/Tobby/pic1-1.jpg": "093a104d892240cbf97e1d2dca53c17f",
"assets/images/Tobby/p1.jpg": "5e1a7249ea3dbb6dc14ec1c92580ec29",
"assets/images/Tobby/p4.jpg": "8c67202dfe60777f8705ae514e963acc",
"assets/images/Tobby/pic11.jpg": "99f6aac01388f183244a54c3e30cc63c",
"assets/images/Tobby/pic7.jpg": "7a1e5eade36e6a3a85cb5c91b89c4103",
"assets/images/Tobby/p2.jpg": "cbaad084b6403808bac36f229a0ccf9f",
"assets/images/Tobby/pic5.jpg": "4e7c6191e605efaf1a96721b91593686",
"assets/images/Tobby/pic8.jpg": "ff551b2d99caf92a928404bc3d6bc3c3",
"assets/images/Tobby/pic3-1.jpg": "168278758f953b19148ea751700301f6",
"assets/images/Tobby/pic4.jpg": "649e93d3640d4d016b64b83ee831dcfb",
"assets/images/Tobby/pic9.jpg": "6a21a59600e554ce58050b24ea260b1c",
"assets/images/Tobby/pic10.jpg": "dc0a0e2a0908a2352e75319924547953",
"assets/images/Tobby/p3.jpg": "fa7cbbe4ee9cab6063cc037ab711967f",
"assets/images/Tobby/pic12.jpg": "b114972462e9780f526a8401a2162362",
"assets/images/Tobby/pic2-1.jpg": "ce0ef0c437d823843e8ebf877e090a6f",
"assets/images/Tobby/p5.jpg": "3e691ac1b2c86c18bbd7d74eb4291c44",
"assets/images/Dad/d10.jpg": "4dd40008d13f34bb3e1a21dc40fa28cf",
"assets/images/Dad/d8.jpg": "07870358f391455886acee7df268dfe9",
"assets/images/Dad/d2.jpg": "a336bfc57987e798368ffa4a1889541f",
"assets/images/Dad/d7.jpg": "957753cdd563e6efa6cc30d679f24997",
"assets/images/Dad/d9.jpg": "46db74386f6ba257a6c18ec47b4c3d14",
"assets/images/Dad/d4.jpg": "2173a47d96964e7343b618cd633529b9",
"assets/images/Dad/d1.jpg": "6b4762c8f4839becf7e53dff5289c10b",
"assets/images/Dad/d51.jpg": "c0636793324b39856bbb2b7ec0d2827e",
"assets/images/Dad/d5.jpg": "a572476e8edfc8b4ac4d258d5001f7d4",
"assets/images/Dad/d6.jpg": "c972cda669addea2a5ca4eb0f70b3443",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"index.html": "ba195982c750dc8382fc12ad9db84c9e",
"/": "ba195982c750dc8382fc12ad9db84c9e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "d5cc9aaf2d5d6f45f5d4b1f91a3e74a3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
