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
import ApiClient from "../ApiClient";
import InlineResponse2001 from '../model/InlineResponse2001';
/**
* Service service.
* @module api/ServiceApi
* @version 1.2.1
*/

export default class ServiceApi {
  /**
  * Constructs a new ServiceApi. 
  * @alias module:api/ServiceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }
  /**
   * Callback function to receive the result of the clientClientIDServiceGet operation.
   * @callback module:api/ServiceApi~clientClientIDServiceGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse2001} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Получение списка Услуг, которые оказывает салон
   * Store *Service* entity
   * @param {Number} clientID ID салона
   * @param {Object} opts Optional parameters
   * @param {Number} opts.limit Как много элементов должно возвращаться за один запрос (default to 25)
   * @param {Number} opts.offset Смещение от первого (default to 0)
   * @param {module:api/ServiceApi~clientClientIDServiceGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse2001}
   */


  clientClientIDServiceGet(clientID, opts, callback) {
    opts = opts || {};
    let postBody = null; // verify the required parameter 'clientID' is set

    if (clientID === undefined || clientID === null) {
      throw new Error("Missing the required parameter 'clientID' when calling clientClientIDServiceGet");
    }

    let pathParams = {
      'clientID': clientID
    };
    let queryParams = {
      'limit': opts['limit'],
      'offset': opts['offset']
    };
    let headerParams = {};
    let formParams = {};
    let authNames = [];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = InlineResponse2001;
    return this.apiClient.callApi('/client/{clientID}/service', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }
  /**
   * Callback function to receive the result of the clientClientIDServicePost operation.
   * @callback module:api/ServiceApi~clientClientIDServicePostCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * 
   * 
   * @param {Object} opts Optional parameters
   * @param {Number} opts.id 
   * @param {String} opts.name Название Услуги
   * @param {File} opts.imageUpload Загружаемое изображение услуги
   * @param {module:model/Number} opts.serviceType Тип услуги - для кошек, для собак, для других
   * @param {String} opts.image Изображение услуги
   * @param {Number} opts.price Цена на услугу
   * @param {String} opts.text Описание услуги
   * @param {module:api/ServiceApi~clientClientIDServicePostCallback} callback The callback function, accepting three arguments: error, data, response
   */


  clientClientIDServicePost(opts, callback) {
    opts = opts || {};
    let postBody = null;
    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {
      'id': opts['id'],
      'name': opts['name'],
      'image_upload': opts['imageUpload'],
      'service_type': opts['serviceType'],
      'image': opts['image'],
      'price': opts['price'],
      'text': opts['text']
    };
    let authNames = ['bearerAuth'];
    let contentTypes = ['multipart/form-data'];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/client/{clientID}/service', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }
  /**
   * Callback function to receive the result of the clientClientIDServiceServiceIDDelete operation.
   * @callback module:api/ServiceApi~clientClientIDServiceServiceIDDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * 
   * 
   * @param {Number} clientID ID салона
   * @param {Number} serviceID ID услуги
   * @param {module:api/ServiceApi~clientClientIDServiceServiceIDDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  clientClientIDServiceServiceIDDelete(clientID, serviceID, callback) {
    let postBody = null; // verify the required parameter 'clientID' is set

    if (clientID === undefined || clientID === null) {
      throw new Error("Missing the required parameter 'clientID' when calling clientClientIDServiceServiceIDDelete");
    } // verify the required parameter 'serviceID' is set


    if (serviceID === undefined || serviceID === null) {
      throw new Error("Missing the required parameter 'serviceID' when calling clientClientIDServiceServiceIDDelete");
    }

    let pathParams = {
      'clientID': clientID,
      'serviceID': serviceID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearerAuth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/client/{clientID}/service/{serviceID}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }
  /**
   * Callback function to receive the result of the clientClientIDServiceServiceIDGet operation.
   * @callback module:api/ServiceApi~clientClientIDServiceServiceIDGetCallback
   * @param {String} error Error message, if any.
   * @param {Object} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Получение детальной информации услуги
   * 
   * @param {Number} clientID ID салона
   * @param {Number} serviceID ID услуги
   * @param {module:api/ServiceApi~clientClientIDServiceServiceIDGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Object}
   */


  clientClientIDServiceServiceIDGet(clientID, serviceID, callback) {
    let postBody = null; // verify the required parameter 'clientID' is set

    if (clientID === undefined || clientID === null) {
      throw new Error("Missing the required parameter 'clientID' when calling clientClientIDServiceServiceIDGet");
    } // verify the required parameter 'serviceID' is set


    if (serviceID === undefined || serviceID === null) {
      throw new Error("Missing the required parameter 'serviceID' when calling clientClientIDServiceServiceIDGet");
    }

    let pathParams = {
      'clientID': clientID,
      'serviceID': serviceID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = [];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = Object;
    return this.apiClient.callApi('/client/{clientID}/service/{serviceID}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }
  /**
   * Callback function to receive the result of the clientClientIDServiceServiceIDPatch operation.
   * @callback module:api/ServiceApi~clientClientIDServiceServiceIDPatchCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * 
   * 
   * @param {Number} clientID ID салона
   * @param {Number} serviceID ID услуги
   * @param {String} name Название Услуги
   * @param {module:model/Number} serviceType Тип услуги - для кошек, для собак, для других
   * @param {Object} opts Optional parameters
   * @param {Number} opts.id 
   * @param {File} opts.imageUpload Загружаемое изображение услуги
   * @param {String} opts.image Изображение услуги
   * @param {Number} opts.price Цена на услугу
   * @param {String} opts.text Описание услуги
   * @param {module:api/ServiceApi~clientClientIDServiceServiceIDPatchCallback} callback The callback function, accepting three arguments: error, data, response
   */


  clientClientIDServiceServiceIDPatch(clientID, serviceID, name, serviceType, opts, callback) {
    opts = opts || {};
    let postBody = null; // verify the required parameter 'clientID' is set

    if (clientID === undefined || clientID === null) {
      throw new Error("Missing the required parameter 'clientID' when calling clientClientIDServiceServiceIDPatch");
    } // verify the required parameter 'serviceID' is set


    if (serviceID === undefined || serviceID === null) {
      throw new Error("Missing the required parameter 'serviceID' when calling clientClientIDServiceServiceIDPatch");
    } // verify the required parameter 'name' is set


    if (name === undefined || name === null) {
      throw new Error("Missing the required parameter 'name' when calling clientClientIDServiceServiceIDPatch");
    } // verify the required parameter 'serviceType' is set


    if (serviceType === undefined || serviceType === null) {
      throw new Error("Missing the required parameter 'serviceType' when calling clientClientIDServiceServiceIDPatch");
    }

    let pathParams = {
      'clientID': clientID,
      'serviceID': serviceID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {
      'id': opts['id'],
      'name': name,
      'image_upload': opts['imageUpload'],
      'service_type': serviceType,
      'image': opts['image'],
      'price': opts['price'],
      'text': opts['text'],
      '_method': "PATCH"
    };
    let authNames = ['bearerAuth'];
    let contentTypes = ['multipart/form-data'];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/client/{clientID}/service/{serviceID}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }

}