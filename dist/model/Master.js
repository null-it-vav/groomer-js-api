/**
 * Groomer Service
 * API для будущей GroomCRM или назовите ее уже как-нибудь. На этой странице расписаны основные эндпоинты, по которым можно получить данные из базы данных (или положить их туда, если будет такая возможность). Также здесь можно будет протестировать эти самые эндпоинты, посмотреть ответы и всякое такое.  TODO: 1. Обновить структуру описания в соответствии со структурой БД 2. Подготовить возможность тестирования 3. Добавить тест-кейсы для всего API  ### Changelog  **v1.2.1**: Добавил эндпоинт для получения информации об авторизованном Клиенте/Мастере  **v1.2.0**: Обновлены пути, респонсы, эндпоинты для приложений вынесены в отдельный стек  **v1.1.4**: Обновил структуру WorkingDiapason  **v1.1.3**: Добавил описания возвращаемых кодов.  **v1.1.2**: Удалил упоминания Питомцев и Пушей из АПИ  **v1.1.1**: Добавил параметр \"платформа\" для заказа, заменил OneSignal на FCM + APNs  **v1.1.0**: Убрал пуши из API  **v1.0.4**: добавлены фильтры по датам, добавлено поле телефона для мастеров (для смс-оповещений), добавлено поле push_device_id для отправки пушей на телефон. 
 *
 * The version of the OpenAPI document: 1.2.1
 * Contact: kosolapus@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient';
/**
 * The Master model module.
 * @module model/Master
 * @version 1.2.1
 */

class Master {
  /**
   * Constructs a new <code>Master</code>.
   * Мастер - это непосредственный исполнитель услуги. Разные мастера могут предоставлять одну или несколько услуг из общего списка Клиента У мастера есть расписание. 
   * @alias module:model/Master
   */
  constructor() {
    Master.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>Master</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Master} obj Optional instance to populate.
   * @return {module:model/Master} The populated <code>Master</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Master();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }

      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }

      if (data.hasOwnProperty('image_upload')) {
        obj['image_upload'] = ApiClient.convertToType(data['image_upload'], File);
      }

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }

      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }

      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
    }

    return obj;
  }

}
/**
 * @member {Number} id
 */


Master.prototype['id'] = undefined;
/**
 * @member {String} image
 */

Master.prototype['image'] = undefined;
/**
 * @member {File} image_upload
 */

Master.prototype['image_upload'] = undefined;
/**
 * @member {String} name
 */

Master.prototype['name'] = undefined;
/**
 * @member {String} phone
 */

Master.prototype['phone'] = undefined;
/**
 * @member {String} description
 */

Master.prototype['description'] = undefined;
/**
 * @member {String} email
 */

Master.prototype['email'] = undefined;
/**
 * @member {String} password
 */

Master.prototype['password'] = undefined;
export default Master;