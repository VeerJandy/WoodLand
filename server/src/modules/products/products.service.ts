import { HttpStatus, Injectable } from '@nestjs/common'
import { BackResponse } from '~/models/BackResponseModel'
import CurrencyEnum from '~/enums/CurrencyEnum'

@Injectable()
export class ProductsService {
  async getPopular(): Promise<BackResponse> {
    return {
      statusCode: HttpStatus.OK,
      data: [
        {
          id: '1',
          isAvailable: true,
          titleUa: "Стіл для кави 'Модерн'",
          titleEn: 'Modern Coffee Table',
          descriptionUa: 'Сучасний та стильний стіл для кави.',
          descriptionEn: 'Modern and stylish coffee table.',
          descriptionFullUa:
            "Цей стіл для кави вражає своєю сучасністю та стилем. Ідеально підходить для сучасних інтер'єрів.",
          descriptionFullEn:
            'This coffee table impresses with its modernity and style. Perfect for contemporary interiors.',
          price: {
            currency: CurrencyEnum.Uah,
            value: 23416
          },
          discount: {
            value: 10,
            expiresAt: '03/16/2024'
          },
          materials: [
            {
              title: 'Дерево',
              value: 'wood'
            }
          ],
          characteristics: [
            {
              title: 'Розмір',
              description: 'Великий'
            },
            {
              title: 'Матеріал',
              description: 'Дерево'
            },
            {
              title: 'Колір',
              description: 'Білий'
            },
            {
              title: 'Модель',
              description: 'Модерн'
            }
          ],
          rating: {
            number: 29,
            rating: 4.7
          },
          category: {
            high: {
              title: 'Столи',
              value: 'table'
            },
            low: {
              title: 'Кавові столи',
              value: 'coffee table'
            }
          },
          images: [
            'https://images.pexels.com/photos/14789484/pexels-photo-14789484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        },
        {
          id: '2',
          isAvailable: true,
          titleUa: "Шафа 'Еко-Люкс'",
          titleEn: 'Eco-Lux Wardrobe',
          descriptionUa: 'Екологічно чиста шафа вищого класу.',
          descriptionEn: 'Environmentally friendly high-end wardrobe.',
          descriptionFullUa:
            'Ця екологічно чиста шафа вищого класу вражає своєю якістю та дизайном.',
          descriptionFullEn:
            'This environmentally friendly high-end wardrobe impresses with its quality and design.',
          price: {
            currency: 'Uah',
            value: 31999
          },
          discount: {
            value: 15,
            expiresAt: '04/20/2024'
          },
          materials: [
            {
              title: 'Дерево',
              value: 'wood'
            },
            {
              title: 'Скло',
              value: 'glass'
            }
          ],
          characteristics: [
            {
              title: 'Розмір',
              description: 'Середній'
            },
            {
              title: 'Матеріал',
              description: 'Дерево, Скло'
            },
            {
              title: 'Колір',
              description: "Натуральний дерев'яний"
            },
            {
              title: 'Стиль',
              description: 'Сучасний'
            }
          ],
          rating: {
            number: 15,
            rating: 4.5
          },
          category: {
            high: {
              title: 'Шафи',
              value: 'wardrobe'
            },
            low: {
              title: 'Екологічні меблі',
              value: 'eco-friendly furniture'
            }
          },
          images: [
            'https://images.pexels.com/photos/5705490/pexels-photo-5705490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        },
        {
          id: '3',
          isAvailable: true,
          titleUa: "Комод 'Вінтажний Шарм'",
          titleEn: 'Vintage Charm Dresser',
          descriptionUa: 'Елегантний комод із винтажним шармом.',
          descriptionEn: 'Elegant dresser with vintage charm.',
          descriptionFullUa:
            "Цей елегантний комод із винтажним шармом додасть особливості вашому інтер'єру.",
          descriptionFullEn:
            'This elegant dresser with vintage charm will add character to your interior.',
          price: {
            currency: 'Uah',
            value: 18999
          },
          discount: {
            value: 12,
            expiresAt: '05/12/2024'
          },
          materials: [
            {
              title: 'Дерево',
              value: 'wood'
            }
          ],
          characteristics: [
            {
              title: 'Розмір',
              description: 'Середній'
            },
            {
              title: 'Матеріал',
              description: 'Дерево'
            },
            {
              title: 'Колір',
              description: 'Темний орех'
            },
            {
              title: 'Стиль',
              description: 'Винтаж'
            }
          ],
          rating: {
            number: 23,
            rating: 4.8
          },
          category: {
            high: {
              title: 'Комоди',
              value: 'dresser'
            },
            low: {
              title: 'Винтажні меблі',
              value: 'vintage furniture'
            }
          },
          images: [
            'https://images.pexels.com/photos/4505452/pexels-photo-4505452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        },
        {
          id: '4',
          isAvailable: true,
          titleUa: "Ліжко 'Сонячний Захід'",
          titleEn: 'Sunset Bliss Bed',
          descriptionUa: 'Затишне ліжко для спокійного відпочинку.',
          descriptionEn: 'Cozy bed for a peaceful rest.',
          descriptionFullUa:
            'Це затишне ліжко створить атмосферу спокою та комфорту у вашій спальні.',
          descriptionFullEn:
            'This cozy bed will create an atmosphere of peace and comfort in your bedroom.',
          price: {
            currency: 'Uah',
            value: 26999
          },
          discount: {
            value: 8,
            expiresAt: '06/25/2024'
          },
          materials: [
            {
              title: 'Дерево',
              value: 'wood'
            },
            {
              title: 'Тканина',
              value: 'fabric'
            }
          ],
          characteristics: [
            {
              title: 'Розмір',
              description: 'Королівський'
            },
            {
              title: 'Матеріал',
              description: 'Дерево, Тканина'
            },
            {
              title: 'Колір',
              description: 'Бежевий'
            },
            {
              title: 'Стиль',
              description: 'Сучасний'
            }
          ],
          rating: {
            number: 18,
            rating: 4.6
          },
          category: {
            high: {
              title: 'Ліжка',
              value: 'bed'
            },
            low: {
              title: 'Сучасні меблі',
              value: 'modern furniture'
            }
          },
          images: [
            'https://images.pexels.com/photos/879010/pexels-photo-879010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        },
        {
          id: '5',
          isAvailable: true,
          titleUa: "Стілець 'Лайт Вуд'",
          titleEn: 'Light Wood Chair',
          descriptionUa: 'Легкий та зручний стілець із дерева.',
          descriptionEn: 'Light and comfortable wooden chair.',
          descriptionFullUa:
            'Цей легкий та зручний стілець із дерева ідеально підходить для кухні або вітальні.',
          descriptionFullEn:
            'This light and comfortable wooden chair are perfect for the kitchen or living room.',
          price: {
            currency: 'Uah',
            value: 8999
          },
          discount: {
            value: 5,
            expiresAt: '07/02/2024'
          },
          materials: [
            {
              title: 'Дерево',
              value: 'wood'
            }
          ],
          characteristics: [
            {
              title: 'Тип',
              description: 'Для обіднього столу'
            },
            {
              title: 'Матеріал',
              description: 'Дерево'
            },
            {
              title: 'Колір',
              description: "Натуральний дерев'яний"
            },
            {
              title: 'Стиль',
              description: 'Сучасний'
            }
          ],
          rating: {
            number: 12,
            rating: 4.3
          },
          category: {
            high: {
              title: 'Стільці',
              value: 'chair'
            },
            low: {
              title: 'Кухонні меблі',
              value: 'kitchen furniture'
            }
          },
          images: [
            'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        },
        {
          id: '6',
          isAvailable: true,
          titleUa: "Книжкова полиця 'Лайт Вуд'",
          titleEn: 'Light Wood Bookshelf',
          descriptionUa: 'Функціональна та стильна книжкова полиця з дерева.',
          descriptionEn: 'Functional and stylish wooden bookshelf.',
          descriptionFullUa:
            'Ця функціональна та стильна книжкова полиця із дерева ідеально підходить для організації простору в вашій кімнаті.',
          descriptionFullEn:
            'This functional and stylish wooden bookshelf is perfect for organizing space in your room.',
          price: {
            currency: 'Uah',
            value: 14999
          },
          discount: {
            value: 7,
            expiresAt: '08/15/2024'
          },
          materials: [
            {
              title: 'Дерево',
              value: 'wood'
            }
          ],
          characteristics: [
            {
              title: 'Розмір',
              description: 'Великий'
            },
            {
              title: 'Матеріал',
              description: 'Дерево'
            },
            {
              title: 'Колір',
              description: "Натуральний дерев'яний"
            },
            {
              title: 'Стиль',
              description: 'Сучасний'
            }
          ],
          rating: {
            number: 25,
            rating: 4.9
          },
          category: {
            high: {
              title: 'Книжкові полиці',
              value: 'bookshelf'
            },
            low: {
              title: 'Меблі для кімнати',
              value: 'room furniture'
            }
          },
          images: [
            'https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        },
        {
          id: '7',
          isAvailable: true,
          titleUa: "Столик для ноутбука 'Мобільний Офіс'",
          titleEn: 'Mobile Office Laptop Desk',
          descriptionUa: 'Зручний та переносний столик для роботи з ноутбуком.',
          descriptionEn:
            'Convenient and portable desk for working with a laptop.',
          descriptionFullUa:
            'Цей зручний та переносний столик із вбудованим органайзером ідеально підходить для роботи або вивчення.',
          descriptionFullEn:
            'This convenient and portable desk with a built-in organizer is perfect for work or study.',
          price: {
            currency: 'Uah',
            value: 7999
          },
          discount: {
            value: 10,
            expiresAt: '09/20/2024'
          },
          materials: [
            {
              title: 'Дерево',
              value: 'wood'
            },
            {
              title: 'Метал',
              value: 'metal'
            }
          ],
          characteristics: [
            {
              title: 'Тип',
              description: 'Переносний'
            },
            {
              title: 'Матеріали',
              description: 'Дерево, Метал'
            },
            {
              title: 'Колір',
              description: 'Чорний'
            },
            {
              title: 'Використання',
              description: 'Для роботи або навчання'
            }
          ],
          rating: {
            number: 14,
            rating: 4.4
          },
          category: {
            high: {
              title: 'Столи',
              value: 'table'
            },
            low: {
              title: 'Меблі для роботи',
              value: 'office furniture'
            }
          },
          images: [
            'https://images.pexels.com/photos/11563556/pexels-photo-11563556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        },
        {
          id: '8',
          isAvailable: true,
          titleUa: "Стіл для роботи 'Професійний Ергоном'",
          titleEn: 'Professional Ergonomic Work Desk',
          descriptionUa:
            'Сучасний стіл для комфортної роботи в офісі або вдома.',
          descriptionEn:
            'Modern desk for comfortable work in the office or at home.',
          descriptionFullUa:
            'Цей сучасний стіл з ергономічним дизайном створений для максимального комфорту під час роботи або навчання.',
          descriptionFullEn:
            'This modern desk with ergonomic design is created for maximum comfort during work or study.',
          price: {
            currency: 'Uah',
            value: 15999
          },
          discount: {
            value: 8,
            expiresAt: '10/15/2024'
          },
          materials: [
            {
              title: 'Дерево',
              value: 'wood'
            },
            {
              title: 'Метал',
              value: 'metal'
            }
          ],
          characteristics: [
            {
              title: 'Тип',
              description: 'Письмовий стіл'
            },
            {
              title: 'Матеріали',
              description: 'Дерево, Метал'
            },
            {
              title: 'Колір',
              description: 'Світлий дуб'
            },
            {
              title: 'Ергономіка',
              description: 'Так'
            }
          ],
          rating: {
            number: 20,
            rating: 4.7
          },
          category: {
            high: {
              title: 'Столи',
              value: 'table'
            },
            low: {
              title: 'Офісні меблі',
              value: 'office furniture'
            }
          },
          images: [
            'https://images.pexels.com/photos/4348078/pexels-photo-4348078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        },
        {
          id: '9',
          isAvailable: true,
          titleUa: "Кухонний стіл 'Смак Життя'",
          titleEn: 'Life Flavor Kitchen Table',
          descriptionUa: 'Компактний кухонний стіл із стильним дизайном.',
          descriptionEn: 'Compact kitchen table with a stylish design.',
          descriptionFullUa:
            'Цей компактний кухонний стіл із стильним дизайном ідеально підходить для невеликих кухонь або обідніх зон.',
          descriptionFullEn:
            'This compact kitchen table with a stylish design is perfect for small kitchens or dining areas.',
          price: {
            currency: 'Uah',
            value: 6999
          },
          discount: {
            value: 10,
            expiresAt: '11/12/2024'
          },
          materials: [
            {
              title: 'Дерево',
              value: 'wood'
            },
            {
              title: 'Метал',
              value: 'metal'
            }
          ],
          characteristics: [
            {
              title: 'Тип',
              description: 'Кухонний стіл'
            },
            {
              title: 'Матеріали',
              description: 'Дерево, Метал'
            },
            {
              title: 'Колір',
              description: 'Білий'
            },
            {
              title: 'Розмір',
              description: 'Компактний'
            }
          ],
          rating: {
            number: 16,
            rating: 4.5
          },
          category: {
            high: {
              title: 'Столи',
              value: 'table'
            },
            low: {
              title: 'Кухонні меблі',
              value: 'kitchen furniture'
            }
          },
          images: [
            'https://images.pexels.com/photos/2398375/pexels-photo-2398375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        },
        {
          id: '10',
          isAvailable: true,
          titleUa: "Ліжко 'Розкішний Сон'",
          titleEn: 'Luxurious Sleep Bed',
          descriptionUa: 'Ліжко для розкішного та комфортного сну.',
          descriptionEn: 'Bed for luxurious and comfortable sleep.',
          descriptionFullUa:
            'Це ліжко із розкішним дизайном та високоякісним матрацем забезпечить вам найкращий сон.',
          descriptionFullEn:
            'This bed with luxurious design and high-quality mattress will provide you the best sleep experience.',
          price: {
            currency: 'Uah',
            value: 26999
          },
          discount: {
            value: 12,
            expiresAt: '12/05/2024'
          },
          materials: [
            {
              title: 'Дерево',
              value: 'wood'
            },
            {
              title: 'Тканина',
              value: 'fabric'
            }
          ],
          characteristics: [
            {
              title: 'Розмір',
              description: 'King Size'
            },
            {
              title: 'Матеріали',
              description: 'Дерево, Тканина'
            },
            {
              title: 'Колір',
              description: 'Темно-синій'
            },
            {
              title: 'Ергономіка',
              description: 'Так'
            }
          ],
          rating: {
            number: 22,
            rating: 4.8
          },
          category: {
            high: {
              title: 'Ліжка',
              value: 'bed'
            },
            low: {
              title: 'Спальні меблі',
              value: 'bedroom furniture'
            }
          },
          images: [
            'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        }
      ],
      message: [],
      result: true
    }
  }

  async getNovelty(): Promise<BackResponse> {
    return {
      statusCode: HttpStatus.OK,
      data: [
        {
          id: '11',
          isAvailable: true,
          titleUa: "Комп'ютерний стіл 'Технологічна Свобода'",
          titleEn: 'Technological Freedom Computer Desk',
          descriptionUa:
            "Стіл для комп'ютера із зручними поличками та вбудованими розетками.",
          descriptionEn:
            'Computer desk with convenient shelves and built-in outlets for technological freedom.',
          descriptionFullUa:
            "Цей стіл для комп'ютера забезпечить вам необхідну свободу та зручність під час роботи або вивчення.",
          descriptionFullEn:
            'This computer desk will provide you with the necessary freedom and convenience during work or study, with convenient shelves and built-in outlets.',
          price: {
            currency: 'Uah',
            value: 12999
          },
          discount: {
            value: 15,
            expiresAt: '01/10/2025'
          },
          materials: [
            {
              title: 'Дерево',
              value: 'wood'
            },
            {
              title: 'Метал',
              value: 'metal'
            }
          ],
          characteristics: [
            {
              title: 'Тип',
              description: "Комп'ютерний стіл"
            },
            {
              title: 'Матеріали',
              description: 'Дерево, Метал'
            },
            {
              title: 'Колір',
              description: 'Світлий'
            },
            {
              title: 'Зручності',
              description: 'Вбудовані розетки'
            }
          ],
          rating: {
            number: 18,
            rating: 4.6
          },
          category: {
            high: {
              title: 'Столи',
              value: 'table'
            },
            low: {
              title: 'Офісні меблі',
              value: 'office furniture'
            }
          },
          images: [
            'https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        },
        {
          id: '12',
          isAvailable: true,
          titleUa: "Крісло для відпочинку 'Затишок Дому'",
          titleEn: 'Home Comfort Lounge Chair',
          descriptionUa:
            "Зручне крісло для відпочинку вдома з м'якими подушками.",
          descriptionEn:
            'Comfortable lounge chair for home relaxation with soft cushions.',
          descriptionFullUa:
            "Це крісло для відпочинку надає затишку та комфорту вдома, з м'якими подушками для додаткового комфорту.",
          descriptionFullEn:
            'This lounge chair provides coziness and comfort at home, with soft cushions for extra relaxation.',
          price: {
            currency: 'Uah',
            value: 8499
          },
          discount: {
            value: 10,
            expiresAt: '02/22/2025'
          },
          materials: [
            {
              title: 'Тканина',
              value: 'fabric'
            },
            {
              title: 'Дерево',
              value: 'wood'
            }
          ],
          characteristics: [
            {
              title: 'Тип',
              description: 'Крісло для відпочинку'
            },
            {
              title: 'Матеріали',
              description: 'Тканина, Дерево'
            },
            {
              title: 'Колір',
              description: 'Бежевий'
            },
            {
              title: 'Зручності',
              description: "М'які подушки"
            }
          ],
          rating: {
            number: 15,
            rating: 4.5
          },
          category: {
            high: {
              title: 'Крісла',
              value: 'chair'
            },
            low: {
              title: 'Меблі для відпочинку',
              value: 'lounge furniture'
            }
          },
          images: [
            'https://images.pexels.com/photos/4846437/pexels-photo-4846437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        },
        {
          id: '13',
          isAvailable: true,
          titleUa: "Шафа для одягу 'Люкс Елегантність'",
          titleEn: 'Luxury Elegance Wardrobe',
          descriptionUa:
            'Велика шафа для одягу із стильним дизайном та великою кількістю полиць.',
          descriptionEn:
            'Large wardrobe with stylish design and ample shelves for storage.',
          descriptionFullUa:
            'Ця велика шафа для одягу не тільки стильна, але й функціональна, з багатьма полицями для зручного зберігання вашого одягу та аксесуарів.',
          descriptionFullEn:
            'This large wardrobe is not only stylish but also functional, with ample shelves for convenient storage of your clothes and accessories.',
          price: {
            currency: 'Uah',
            value: 18999
          },
          discount: {
            value: 8,
            expiresAt: '03/18/2025'
          },
          materials: [
            {
              title: 'Дерево',
              value: 'wood'
            },
            {
              title: 'Дзеркало',
              value: 'mirror'
            }
          ],
          characteristics: [
            {
              title: 'Розмір',
              description: 'Великий'
            },
            {
              title: 'Матеріали',
              description: 'Дерево, Дзеркало'
            },
            {
              title: 'Колір',
              description: 'Темний вільховий'
            },
            {
              title: 'Функціонал',
              description: 'Багато полиць і відділень'
            }
          ],
          rating: {
            number: 27,
            rating: 4.9
          },
          category: {
            high: {
              title: 'Шафи',
              value: 'wardrobe'
            },
            low: {
              title: 'Меблі для спальні',
              value: 'bedroom furniture'
            }
          },
          images: [
            'https://images.pexels.com/photos/6580394/pexels-photo-6580394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        },
        {
          id: '14',
          isAvailable: true,
          titleUa: "Ліжко-черевик 'Спальний Космос'",
          titleEn: 'Space-themed Bed',
          descriptionUa:
            'Ліжко з космічним дизайном для тих, хто мріє плавати серед зірок.',
          descriptionEn:
            'Bed with a space-themed design for those who dream of floating among the stars.',
          descriptionFullUa:
            'Це ліжко виглядає як справжній космічний корабель, ідеально підходить для тих, хто любить космос та астрономію.',
          descriptionFullEn:
            'This bed looks like a real spaceship, perfect for those who love space and astronomy.',
          price: {
            currency: 'Uah',
            value: 21999
          },
          discount: {
            value: 10,
            expiresAt: '04/25/2025'
          },
          materials: [
            {
              title: 'Дерево',
              value: 'wood'
            },
            {
              title: 'Тканина',
              value: 'fabric'
            }
          ],
          characteristics: [
            {
              title: 'Розмір',
              description: 'King Size'
            },
            {
              title: 'Матеріали',
              description: 'Дерево, Тканина'
            },
            {
              title: 'Колір',
              description: 'Чорний, Зірковий дизайн'
            },
            {
              title: 'Ергономіка',
              description: 'Так'
            }
          ],
          rating: {
            number: 19,
            rating: 4.7
          },
          category: {
            high: {
              title: 'Ліжка',
              value: 'bed'
            },
            low: {
              title: 'Спальні меблі',
              value: 'bedroom furniture'
            }
          },
          images: [
            'https://images.pexels.com/photos/15721958/pexels-photo-15721958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        },
        {
          id: '15',
          isAvailable: true,
          titleUa: "Барний стіл 'Елегантна Вечірка'",
          titleEn: 'Elegant Party Bar Table',
          descriptionUa:
            'Стіл для бару зі стильним дизайном для елегантних вечірок.',
          descriptionEn: 'Bar table with a stylish design for elegant parties.',
          descriptionFullUa:
            'Цей барний стіл створений для того, щоб надавати вашим вечіркам елегантний шарм та комфортну атмосферу.',
          descriptionFullEn:
            'This bar table is designed to add an elegant charm and comfortable atmosphere to your parties.',
          price: {
            currency: 'Uah',
            value: 8999
          },
          discount: {
            value: 12,
            expiresAt: '05/30/2025'
          },
          materials: [
            {
              title: 'Дерево',
              value: 'wood'
            },
            {
              title: 'Метал',
              value: 'metal'
            }
          ],
          characteristics: [
            {
              title: 'Тип',
              description: 'Барний стіл'
            },
            {
              title: 'Матеріали',
              description: 'Дерево, Метал'
            },
            {
              title: 'Колір',
              description: 'Темний вільховий'
            },
            {
              title: 'Зручності',
              description: 'Підставка для ніг'
            }
          ],
          rating: {
            number: 25,
            rating: 4.8
          },
          category: {
            high: {
              title: 'Столи',
              value: 'table'
            },
            low: {
              title: 'Барні меблі',
              value: 'bar furniture'
            }
          },
          images: [
            'https://images.pexels.com/photos/15757569/pexels-photo-15757569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        },
        {
          id: '16',
          isAvailable: true,
          titleUa: "Книжкова полиця 'Мінімалістичний Куточок'",
          titleEn: 'Minimalist Corner Bookshelf',
          descriptionUa:
            'Стелаж для книг у мінімалістичному дизайні для стильного оформлення приміщення.',
          descriptionEn:
            'Bookshelf in a minimalist design for stylish room decor.',
          descriptionFullUa:
            'Ця книжкова полиця в мінімалістичному стилі стане чудовим елементом оформлення та функціональним місцем для зберігання книг та декору.',
          descriptionFullEn:
            'This minimalist bookshelf will be a great decorative element and functional space for storing books and decor.',
          price: {
            currency: 'Uah',
            value: 6499
          },
          discount: {
            value: 10,
            expiresAt: '06/15/2025'
          },
          materials: [
            {
              title: 'Дерево',
              value: 'wood'
            },
            {
              title: 'Метал',
              value: 'metal'
            }
          ],
          characteristics: [
            {
              title: 'Тип',
              description: 'Книжкова полиця'
            },
            {
              title: 'Матеріали',
              description: 'Дерево, Метал'
            },
            {
              title: 'Колір',
              description: 'Білий'
            },
            {
              title: 'Розмір',
              description: 'Кутовий'
            }
          ],
          rating: {
            number: 21,
            rating: 4.6
          },
          category: {
            high: {
              title: 'Полиці',
              value: 'shelf'
            },
            low: {
              title: 'Меблі для вітальні',
              value: 'living room furniture'
            }
          },
          images: [
            'https://images.pexels.com/photos/4857781/pexels-photo-4857781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        },
        {
          id: '17',
          isAvailable: true,
          titleUa: "Кухонний стіл 'Компактна Витонченість'",
          titleEn: 'Compact Elegance Kitchen Table',
          descriptionUa:
            'Стіл для кухні із зручними вбудованими полицями для максимальної функціональності.',
          descriptionEn:
            'Kitchen table with convenient built-in shelves for maximum functionality.',
          descriptionFullUa:
            'Цей кухонний стіл поєднує в собі елегантний дизайн та практичність, забезпечуючи зручність під час готування та прийому їжі.',
          descriptionFullEn:
            'This kitchen table combines elegant design and practicality, providing convenience during cooking and dining.',
          price: {
            currency: 'Uah',
            value: 7999
          },
          discount: {
            value: 8,
            expiresAt: '07/20/2025'
          },
          materials: [
            {
              title: 'Дерево',
              value: 'wood'
            },
            {
              title: 'Метал',
              value: 'metal'
            }
          ],
          characteristics: [
            {
              title: 'Тип',
              description: 'Кухонний стіл'
            },
            {
              title: 'Матеріали',
              description: 'Дерево, Метал'
            },
            {
              title: 'Колір',
              description: 'Світлий дуб'
            },
            {
              title: 'Функціонал',
              description: 'Вбудовані полиці'
            }
          ],
          rating: {
            number: 18,
            rating: 4.7
          },
          category: {
            high: {
              title: 'Столи',
              value: 'table'
            },
            low: {
              title: 'Кухонні меблі',
              value: 'kitchen furniture'
            }
          },
          images: [
            'https://images.pexels.com/photos/2551794/pexels-photo-2551794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        }
      ],
      message: [],
      result: true
    }
  }
}
