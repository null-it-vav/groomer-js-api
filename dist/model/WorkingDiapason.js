/**
 * Groomer Service
 * API для будущей GroomCRM или назовите ее уже как-нибудь. На этой странице расписаны основные эндпоинты, по которым можно получить данные из базы данных (или положить их туда, если будет такая возможность). Также здесь можно будет протестировать эти самые эндпоинты, посмотреть ответы и всякое такое.  ### Changelog  **v1.2.2**: Добавлена сущность Салонов - географических расположений точек обслуживания клиентов, к которым привязываются мастера. Для получения списка мастеров салона добавлен фильтр salon_id  **v1.2.1**: Добавил эндпоинт для получения информации об авторизованном Клиенте/Мастере  **v1.2.0**: Обновлены пути, респонсы, эндпоинты для приложений вынесены в отдельный стек  **v1.1.4**: Обновил структуру WorkingDiapason  **v1.1.3**: Добавил описания возвращаемых кодов.  **v1.1.2**: Удалил упоминания Питомцев и Пушей из АПИ  **v1.1.1**: Добавил параметр \"платформа\" для заказа, заменил OneSignal на FCM + APNs  **v1.1.0**: Убрал пуши из API  **v1.0.4**: добавлены фильтры по датам, добавлено поле телефона для мастеров (для смс-оповещений), добавлено поле push_device_id для отправки пушей на телефон. 
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
 * The WorkingDiapason model module.
 * @module model/WorkingDiapason
 * @version 1.2.1
 */
class WorkingDiapason {
  /**
   * Constructs a new <code>WorkingDiapason</code>.
   * @alias module:model/WorkingDiapason
   */
  constructor() {

    WorkingDiapason.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>WorkingDiapason</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkingDiapason} obj Optional instance to populate.
   * @return {module:model/WorkingDiapason} The populated <code>WorkingDiapason</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new WorkingDiapason();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('time_start')) {
        obj['time_start'] = ApiClient.convertToType(data['time_start'], 'Number');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'Number');
      }
    }
    return obj;
  }

}

/**
 * @member {Number} id
 */
WorkingDiapason.prototype['id'] = undefined;

/**
 * @member {Number} time_start
 */
WorkingDiapason.prototype['time_start'] = undefined;

/**
 * 0 - свободно, 1 - забронировано, 2 - подтверждено
 * @member {Number} state
 */
WorkingDiapason.prototype['state'] = undefined;

export default WorkingDiapason;