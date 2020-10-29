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
import InlineResponse200 from '../model/InlineResponse200';
/**
* Promotion service.
* @module api/PromotionApi
* @version 1.2.1
*/

export default class PromotionApi {
  /**
  * Constructs a new PromotionApi. 
  * @alias module:api/PromotionApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }
  /**
   * Callback function to receive the result of the clientClientIDPromotionGet operation.
   * @callback module:api/PromotionApi~clientClientIDPromotionGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Получение списка акций для салона
   * 
   * @param {Number} clientID ID салона
   * @param {Object} opts Optional parameters
   * @param {Number} opts.limit Как много элементов должно возвращаться за один запрос (default to 25)
   * @param {Number} opts.offset Смещение от первого (default to 0)
   * @param {module:api/PromotionApi~clientClientIDPromotionGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse200}
   */


  clientClientIDPromotionGet(clientID, opts, callback) {
    opts = opts || {};
    let postBody = null; // verify the required parameter 'clientID' is set

    if (clientID === undefined || clientID === null) {
      throw new Error("Missing the required parameter 'clientID' when calling clientClientIDPromotionGet");
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
    let returnType = InlineResponse200;
    return this.apiClient.callApi('/client/{clientID}/promotion', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }
  /**
   * Callback function to receive the result of the clientClientIDPromotionPost operation.
   * @callback module:api/PromotionApi~clientClientIDPromotionPostCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * 
   * 
   * @param {Number} clientID ID салона
   * @param {Object} opts Optional parameters
   * @param {Number} opts.id Уникальный идентификатор Акции
   * @param {String} opts.title Заголовок Акции
   * @param {String} opts.fullDescription Текст Акции, поддерживает разметку
   * @param {String} opts.imageUrl Изображение акции
   * @param {File} opts.imageUpload 
   * @param {Number} opts.dateStart Дата начала акции
   * @param {Number} opts.dateEnd Дата окончания акции
   * @param {module:api/PromotionApi~clientClientIDPromotionPostCallback} callback The callback function, accepting three arguments: error, data, response
   */


  clientClientIDPromotionPost(clientID, opts, callback) {
    opts = opts || {};
    let postBody = null; // verify the required parameter 'clientID' is set

    if (clientID === undefined || clientID === null) {
      throw new Error("Missing the required parameter 'clientID' when calling clientClientIDPromotionPost");
    }

    let pathParams = {
      'clientID': clientID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {
      'id': opts['id'],
      'title': opts['title'],
      'full_description': opts['fullDescription'],
      'image_url': opts['imageUrl'],
      'image_upload': opts['imageUpload'],
      'date_start': opts['dateStart'],
      'date_end': opts['dateEnd']
    };
    let authNames = ['bearerAuth'];
    let contentTypes = ['multipart/form-data'];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/client/{clientID}/promotion', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }
  /**
   * Callback function to receive the result of the clientClientIDPromotionPromotionIDDelete operation.
   * @callback module:api/PromotionApi~clientClientIDPromotionPromotionIDDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * 
   * 
   * @param {Number} clientID ID салона
   * @param {Number} promotionID Id requested Promotion
   * @param {module:api/PromotionApi~clientClientIDPromotionPromotionIDDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  clientClientIDPromotionPromotionIDDelete(clientID, promotionID, callback) {
    let postBody = null; // verify the required parameter 'clientID' is set

    if (clientID === undefined || clientID === null) {
      throw new Error("Missing the required parameter 'clientID' when calling clientClientIDPromotionPromotionIDDelete");
    } // verify the required parameter 'promotionID' is set


    if (promotionID === undefined || promotionID === null) {
      throw new Error("Missing the required parameter 'promotionID' when calling clientClientIDPromotionPromotionIDDelete");
    }

    let pathParams = {
      'clientID': clientID,
      'promotionID': promotionID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['bearerAuth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/client/{clientID}/promotion/{promotionID}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }
  /**
   * Callback function to receive the result of the clientClientIDPromotionPromotionIDGet operation.
   * @callback module:api/PromotionApi~clientClientIDPromotionPromotionIDGetCallback
   * @param {String} error Error message, if any.
   * @param {Object} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Получение детальной информации по акции
   * 
   * @param {Number} clientID ID салона
   * @param {Number} promotionID Id requested Promotion
   * @param {module:api/PromotionApi~clientClientIDPromotionPromotionIDGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Object}
   */


  clientClientIDPromotionPromotionIDGet(clientID, promotionID, callback) {
    let postBody = null; // verify the required parameter 'clientID' is set

    if (clientID === undefined || clientID === null) {
      throw new Error("Missing the required parameter 'clientID' when calling clientClientIDPromotionPromotionIDGet");
    } // verify the required parameter 'promotionID' is set


    if (promotionID === undefined || promotionID === null) {
      throw new Error("Missing the required parameter 'promotionID' when calling clientClientIDPromotionPromotionIDGet");
    }

    let pathParams = {
      'clientID': clientID,
      'promotionID': promotionID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = [];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = Object;
    return this.apiClient.callApi('/client/{clientID}/promotion/{promotionID}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }
  /**
   * Callback function to receive the result of the clientClientIDPromotionPromotionIDPatch operation.
   * @callback module:api/PromotionApi~clientClientIDPromotionPromotionIDPatchCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * 
   * 
   * @param {Number} clientID ID салона
   * @param {Number} promotionID Id requested Promotion
   * @param {Object} opts Optional parameters
   * @param {Number} opts.id Уникальный идентификатор Акции
   * @param {String} opts.title Заголовок Акции
   * @param {String} opts.fullDescription Текст Акции, поддерживает разметку
   * @param {String} opts.imageUrl Изображение акции
   * @param {File} opts.imageUpload 
   * @param {Number} opts.dateStart Дата начала акции
   * @param {Number} opts.dateEnd Дата окончания акции
   * @param {module:api/PromotionApi~clientClientIDPromotionPromotionIDPatchCallback} callback The callback function, accepting three arguments: error, data, response
   */


  clientClientIDPromotionPromotionIDPatch(clientID, promotionID, opts, callback) {
    opts = opts || {};
    let postBody = null; // verify the required parameter 'clientID' is set

    if (clientID === undefined || clientID === null) {
      throw new Error("Missing the required parameter 'clientID' when calling clientClientIDPromotionPromotionIDPatch");
    } // verify the required parameter 'promotionID' is set


    if (promotionID === undefined || promotionID === null) {
      throw new Error("Missing the required parameter 'promotionID' when calling clientClientIDPromotionPromotionIDPatch");
    }

    let pathParams = {
      'clientID': clientID,
      'promotionID': promotionID
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {
      'id': opts['id'],
      'title': opts['title'],
      'full_description': opts['fullDescription'],
      'image_url': opts['imageUrl'],
      'image_upload': opts['imageUpload'],
      'date_start': opts['dateStart'],
      'date_end': opts['dateEnd'],
      '_method': "PATCH"
    };
    let authNames = ['bearerAuth'];
    let contentTypes = ['multipart/form-data'];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/client/{clientID}/promotion/{promotionID}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }

}