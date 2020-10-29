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
import ApiClient from './ApiClient';
import Bearer from './model/Bearer';
import Client from './model/Client';
import InlineResponse200 from './model/InlineResponse200';
import InlineResponse2001 from './model/InlineResponse2001';
import InlineResponse2002 from './model/InlineResponse2002';
import Master from './model/Master';
import OneOfMasterClient from './model/OneOfMasterClient';
import Order from './model/Order';
import Promotion from './model/Promotion';
import Service from './model/Service';
import WorkingDiapason from './model/WorkingDiapason';
import ApplicationApi from './api/ApplicationApi';
import ClientApi from './api/ClientApi';
import MasterApi from './api/MasterApi';
import OAuthApi from './api/OAuthApi';
import OrderApi from './api/OrderApi';
import PromotionApi from './api/PromotionApi';
import ServiceApi from './api/ServiceApi';
import WorkingDiapasonApi from './api/WorkingDiapasonApi';
/**
* API___GroomCRM___________________________________________TODO1_________2____3_______API_Changelogv1_2_1_________v1_2_0__________v1_1_4___WorkingDiapasonv1_1_3_____v1_1_2_______v1_1_1_______OneSignal__FCM__APNsv1_1_0____APIv1_0_4_______________push_device_id______.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var GroomerService = require('index'); // See note below*.
* var xxxSvc = new GroomerService.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new GroomerService.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new GroomerService.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new GroomerService.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.2.1
*/

export {
/**
 * The ApiClient constructor.
 * @property {module:ApiClient}
 */
ApiClient
/**
 * The Bearer model constructor.
 * @property {module:model/Bearer}
 */
, Bearer
/**
 * The Client model constructor.
 * @property {module:model/Client}
 */
, Client
/**
 * The InlineResponse200 model constructor.
 * @property {module:model/InlineResponse200}
 */
, InlineResponse200
/**
 * The InlineResponse2001 model constructor.
 * @property {module:model/InlineResponse2001}
 */
, InlineResponse2001
/**
 * The InlineResponse2002 model constructor.
 * @property {module:model/InlineResponse2002}
 */
, InlineResponse2002
/**
 * The Master model constructor.
 * @property {module:model/Master}
 */
, Master
/**
 * The OneOfMasterClient model constructor.
 * @property {module:model/OneOfMasterClient}
 */
, OneOfMasterClient
/**
 * The Order model constructor.
 * @property {module:model/Order}
 */
, Order
/**
 * The Promotion model constructor.
 * @property {module:model/Promotion}
 */
, Promotion
/**
 * The Service model constructor.
 * @property {module:model/Service}
 */
, Service
/**
 * The WorkingDiapason model constructor.
 * @property {module:model/WorkingDiapason}
 */
, WorkingDiapason
/**
* The ApplicationApi service constructor.
* @property {module:api/ApplicationApi}
*/
, ApplicationApi
/**
* The ClientApi service constructor.
* @property {module:api/ClientApi}
*/
, ClientApi
/**
* The MasterApi service constructor.
* @property {module:api/MasterApi}
*/
, MasterApi
/**
* The OAuthApi service constructor.
* @property {module:api/OAuthApi}
*/
, OAuthApi
/**
* The OrderApi service constructor.
* @property {module:api/OrderApi}
*/
, OrderApi
/**
* The PromotionApi service constructor.
* @property {module:api/PromotionApi}
*/
, PromotionApi
/**
* The ServiceApi service constructor.
* @property {module:api/ServiceApi}
*/
, ServiceApi
/**
* The WorkingDiapasonApi service constructor.
* @property {module:api/WorkingDiapasonApi}
*/
, WorkingDiapasonApi };