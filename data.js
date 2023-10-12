const PRODUCT = {
   acompañamiento: [
        {
            "id": 1,
            "name": "Papas Fritas",
            "price": 1000,
            "description": "Papas Fritas",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695230213/papas_fritas_5fc665a728.png"
        },
        {
            "id": 2,
            "name": "Papas a la provenzal",
            "price": 1000,
            "description": "Papas fritas con ajo y perejil",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695230288/papas_provenzal_76e0acb615.png"
        },
        {
            "id": 3,
            "name": "Pure de papas",
            "price": 1210,
            "description": "Pure de papas cocidas a las brazas",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695230341/pure_de_papas_c9da7a12bf.png"
        },
        {
            "id": 4,
            "name": "Pure de calabazas",
            "price": 900,
            "description": "Pure de calabazas cocida a las brazas",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695230382/pure_de_calabaza_b34704e41c.png"
        },
        {
            "id": 5,
            "name": "Ensalada criolla",
            "price": 1400,
            "description": "Ensalada de Rúcula, radicheta, parmesano y tomates cherrys",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695230516/Ensalada_criolla_e1b25117f0.png"
        },
        {
            "id": 6,
            "name": "Pure mixto",
            "price": 900,
            "description": "Pure de calabaza y papa",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695230558/pure_mixto_c38301849f.png"
        },
        {
            "id": 7,
            "name": "Pimenton con huevo",
            "price": 1200,
            "description": "Morrones asados con huevo y especias",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695232326/small_morrones_asados_a9cc78cfd2.png"
        },
        {
            "id": 8,
            "name": "Verduras a las brasas",
            "price": 1500,
            "description": "Verduras asadas: Esparragos, hongos, pimientos rojo,verde y amarillo, pepino, berenjena",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695230636/verduras_a_las_brasas_df83bae3c0.png"
        }
    ],
    postres: [
        {
            "id": 1,
            "name": "Flan",
            "price": 680,
            "description": "Flan casero con dulce de leche y crema",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695230713/Flan_Casero_1_aac7e491e3.png"
        },
        {
            "id": 2,
            "name": "Durazno y ciruelas Malbec a las brazas",
            "price": 1000,
            "description": "Coccion y reduccion de duraznos en vino Malbec a las brazas",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1696764277/durazno_a_las_brazas_eeagxi.png"
        },
        {
            "id": 3,
            "name": "Ensalada de frutas",
            "price": 680,
            "description": "Vaso de 300 ml de ensalada de fruta,contiene frutilla,naranja,kiwi, banana, manzana, anana, durazno, cereza",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695230780/ensalada_frutas_4dd0114eff.png"
        },
        {
            "id": 4,
            "name": "Helados",
            "price": 660,
            "description": "Copa con 3 bochas de helado a eleccion",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695230833/helado_d1979e2914.png"
        },
        {
            "id": 5,
            "name": "Brownie con helado de crema",
            "price": 880,
            "description": "Browni adornado con bocha de Helado a eleccion",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695230882/americadigital_brownie_helado_3da7c60d94.png"
        }
    ],
    cafeteria:[
        {
            "id": 1,
            "name": "Café doble",
            "price": 440,
            "description": "Browni adornado con bocha de Helado a eleccion",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695230947/cafe_doble_b817946f7f.png"
        },
        {
            "id": 2,
            "name": "Café expresso",
            "price": 280,
            "description": "25- 30 ml de puro placer. Café caliente elaborado a 9 atmosferas de presión a través de 7 gramos de café molido y prensado",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695230993/cafe_expreso_5295dd8ec3.png"
        },
        {
            "id": 3,
            "name": "Variedad de te",
            "price": 380,
            "description": "Taza de 250 ml de te, sabor a eleccion",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695231118/te_f4b60f7cff.png"
        },
        {
            "id": 4,
            "name": "Café con leche",
            "price": 420,
            "description": "150 ml de café  con el añadido de 100 ml de leche y su espuma",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695231204/cafe_con_leche_cbe9b71140.png"
        }
    ],
    bebidas:[
        {
            "id": 1,
            "name": "Linea Coca Cola",
            "price": 580,
            "description": "Coca Cola, Light, Sprite, Fanta",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695248027/coca_sprite_fanta_84418c36a2.png"
        },
        {
            "id": 2,
            "name": "Agua mineral",
            "price": 460,
            "description": "Agua mineral, con o sin gas",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695248096/small_agua_mineral_44b082a60f.png"
        },
        {
            "id": 3,
            "name": "Jugo de naranja",
            "price": 980,
            "description": "Jugo de naranja exprimido",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695248230/jugo_de_naranja_ef3953df91.png"
        },
        {
            "id": 4,
            "name": "Agua saborizada",
            "price": 420,
            "description": "Acquarious manza,pera,pomelo",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695248173/agua_saborizada_78ce96cee2.png"
        }
    ],
    cervezas:[
        {
            "id": 1,
            "name": "Patricia",
            "price": 2200,
            "description": "Cerveza 1lt",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695233081/patricia_7d02f74307.png"
        },
        {
            "id": 2,
            "name": "Strella Artois",
            "price": 2500,
            "description": "Cerveza 1lt",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695232911/stella_artois_4d1fadcf27.png"
        },
        {
            "id": 3,
            "name": "Budweiser",
            "price": 1140,
            "description": "Cerveza 500m",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695232952/budweiser_09148bf768.png"
        },
        {
            "id": 4,
            "name": "Corona",
            "price": 1140,
            "description": "Cerveza 500ml",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695233028/corona1_cf1454b2c4.png"
        },
        {
            "id": 5,
            "name": "Quilmes",
            "price": 1240,
            "description": "Cerveza 500ml",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695233129/quilmes_4612c87eab.png"
        }
    ],
    vinos:[
        {
            "id": 1,
            "name": "Casillero del Diablo Merlot",
            "price": 1240,
            "description": "Vino 750ml",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695248486/casillero_del_diablo_merlot_6b9f58af25.png"
        },
        {
            "id": 2,
            "name": "Hectpr Durgutti Malbec",
            "price": 3900,
            "description": "Vino 750ml",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695248355/small_Hector_Durguitti_Malbec_798f357f63.png"
        },
        {
            "id": 3,
            "name": "Trapiche Cabernet Sauvignon",
            "price": 5500,
            "description": "Vino 750ml",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695248429/trapiche_cabernet_sauvignon_78b23bfe8c.png"
        },
        {
            "id": 4,
            "name": "Don Pascual Varietal",
            "price": 4200,
            "description": "Vino 750ml",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695248296/don_pascual_varietal_ddccbcc961.png"
        }
    ],
    menuInfantil:[
        {
            "id": 1,
            "name": "Milanesitas con pure de papas o papas fritas",
            "price": 1400,
            "description": "Plato de milanesa de ternera con pure de papas o papas fritas",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695161406/milanesa_pure_b0f053f325.png"
        },
        {
            "id": 2,
            "name": "Fideos con tuco o crema",
            "price": 860,
            "description": "Fideos con salsa boloniesa o crema",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695176080/fideos_tuco_069ab95a5c.png"
        },
        {
            "id": 3,
            "name": "Nuggets con papas fritas o pure de papas",
            "price": 860,
            "description": "Nuggets de pollo con papas fritas o pure de papas",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695176282/nuggets_con_pure_299ea3e3b2.png"
        },
        {
            "id": 4,
            "name": "Hamburguesa con papas fritas (cheeseburger)",
            "price": 4200,
            "description": "Hamburguesa a la parrilla con queso y papas fritas",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1696764277/chessburger_lqfnti.png"
        },
        {
            "id": 5,
            "name": "Pizza a la parrilla Kids",
            "price": 4200,
            "description": "Pizza a la parrilla de muzzarela",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1696764277/pizza_a_la_parrilla_xn9nmm.png"
        }
    ],
    menuPrincimal:[
        {
            "id": 1,
            "name": "Salchicha Parrillera",
            "price": 2200,
            "description": "Salchicha Parrillera Tradicional Criolla",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695176417/Salchicha_Parrillera_505e2263cf.png"
        },
        {
            "id": 2,
            "name": "Sándwich Bondiola",
            "price": 2700,
            "description": "Sándwich de bondiola asada, lechuga, tomate en pan de doble semilla con guarnición a elección",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695210159/Sandwich_de_Bondiola_4c349fa3c9.png"
        },
        {
            "id": 3,
            "name": "Sándwich de Pollo",
            "price": 2600,
            "description": "Sándwich de pollo asado, lechuga, tomate en pan de doble semilla con guarnición a elección",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695176601/Sandwich_de_Pollo_36c7c283d9.png"
        },
        {
            "id": 4,
            "name": "Sandwich de Chorizo",
            "price": 2050,
            "description": "Sándwich de chorizo asado, lechuga, tomate en pan tipo campo con salsa criolla, chimichurri aparte y con guarnición a elección.        ",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695210266/Sandwich_de_Chorizo_40d246c17b.png"
        },
        {
            "id": 5,
            "name": "Chorizo",
            "price": 1550,
            "description": "Chorizo Tradicional Criollo",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695218770/Chorizo_6b1d964715.png"
        },
        {
            "id": 6,
            "name": "Chorizo Bombón Tradicional",
            "price": 1400,
            "description": "Chorizo Bombón Tradicional Criollo",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695218816/Chorizo_Bombom_fb2d515e4b.png"
        },
        {
            "id": 7,
            "name": "Sándwich de Lomito",
            "price": 1500,
            "description": "Sándwich de lomito asado, lechuga, tomate en pan ciabatta de manteca con salsa criolla, chimichurri aparte y con guarnición a elección",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1696764277/sandwich_de_lomito_svjvtx.png"
        },
        {
            "id": 8,
            "name": "Morcilla",
            "price": 1550,
            "description": "Morcilla tradicional Criolla",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695218930/Morcilla_26de3a1495.png"
        },
        {
            "id": 9,
            "name": "Morcilla Bombóm",
            "price": 1400,
            "description": "Morcilla Bombóm tradicional Criollo",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695218972/Morcilla_Bombom_787adffa73.png"
        },
        {
            "id": 10,
            "name": "Bife de chorizo",
            "price": 2880,
            "description": "Bife de chorizo tradicional a las brasas",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695219050/Bife_de_chorizo_b09de0cc52.png"
        },
        {
            "id": 11,
            "name": "Ojo de bife",
            "price": 2920,
            "description": "Ojo de Bife tradicional a las brasas",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695219177/ojo_bife_especial_db6a4747ec.png"
        },
        {
            "id": 12,
            "name": "Vacío",
            "price": 3420,
            "description": "Vacio tradicional Argentino a las brasas",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695219236/vacio_ed0af1db87.png"
        },
        {
            "id": 13,
            "name": "Chinchulines de Ternera",
            "price": 2250,
            "description": "Chinchulines de Ternera crocantes",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695219301/Chinculines_de_ternera_12f6018b39.png"
        },
        {
            "id": 14,
            "name": "Asado banderita premium",
            "price": 3840,
            "description": "Asado de tira de 700 gr para dos personas",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695219414/Asado_de_Tira_d04d27ce05.png"
        },
        {
            "id": 15,
            "name": "Lomo",
            "price": 3540,
            "description": "Colita de Lomo 400 grs. con guarnición a elección",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695219500/Colita_de_lomo_78378b17ff.png"
        },
        {
            "id": 16,
            "name": "Bife de chorizo a las Brasas Cook",
            "price": 4980,
            "description": "Medio Bife de Chorizo 300 grs",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695219050/Bife_de_chorizo_b09de0cc52.png"
        },
        {
            "id": 17,
            "name": "Pollo",
            "price": 1440,
            "description": "Pechuga de Pollo deshuesada grille con guarnición a elección",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695219668/Pechuga_de_Pollo_3d24eaafbf.png"
        },
        {
            "id": 18,
            "name": "Brochette de lomo (2 unidades)",
            "price": 3780,
            "description": "Brochette de Lomo con panceta, cebolla y morrón con guarnición a elección",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695219742/Brochette_de_Lomo_05eabcd57a.png"
        },
        {
            "id": 19,
            "name": "Brochette de pollo (2 unidades)",
            "price": 3200,
            "description": "Brochette de Pollo y molleja con panceta, cebolla y morrón con guarnición a elección        ",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695219800/Brochette_de_Pollo_5b0d3b7fa8.png"
        },
        {
            "id": 20,
            "name": "Brochette de mixta (2 unidades)",
            "price": 3500,
            "description": "Brochette de Lomo y pollo con panceta, cebolla y morrón con guarnición a elección",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695219876/brochette_mixta_ffde267c1c.png"
        },
        {
            "id": 21,
            "name": "Mollejas de Corazón",
            "price": 7050,
            "description": "Mollejas de Corazón de ternera fileteadas",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695219964/Mollejas_de_corazon_b3b92254b3.png"
        },
        {
            "id": 22,
            "name": "Degustación de carnes",
            "price": 6240,
            "description": "Degustación de carnes : cortes de vaca, pollo, cerdo",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695220074/degustacion_carne_06f97c2677.png"
        },
        {
            "id": 23,
            "name": "Degustación de achuras",
            "price": 6240,
            "description": "Degustación de achuras: rinoncitos, chinchulines,mollejas, chorizo, morcilla",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695220106/degustacion_de_achuras_8cb5f7d476.png"
        },
        {
            "id": 24,
            "name": "Parrillada para 2 personas",
            "price": 6620,
            "description": "Cortes de carne y achuras para dos personas",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695220180/parrillada_para_dos_03dcbac2ec.png"
        },
        {
            "id": 25,
            "name": "Parrillada para 6 personas",
            "price": 17800,
            "description": "Cortes de carne y achuras para seis personas",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695220524/parrillada_para_6_0cecbdc4f4.png"
        },
        {
            "id": 26,
            "name": "Parrillada de vegetales",
            "price": 4820,
            "description": "Parrillada de vegetales finamente sazonados. Pimientos rojo,Berenjenas, Zuchinni,cebolla morada, papas, puerro y cebollita de verdeo acoompaniada con salsa criolla",
            "image": "https://res.cloudinary.com/dbry8g6vk/image/upload/v1695220777/vegetales_a_la_parrilla_2_b8eb1e7442.png"
        }
    ]

    
}
module.exports = PRODUCT