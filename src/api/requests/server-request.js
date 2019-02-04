/*
 * Server Request
 * @action: Request class to connect with API
 */

import Config from 'config';
import { Responses } from 'constants';
import { AppError } from 'errors';
import camelcaseKeys from 'camelcase-keys-deep';
import decamelizeKeys from 'decamelize-keys-deep';
import { map } from 'lodash';

export default class ServerRequest {
  _baseURL = Config.baseUrl;
  _apiPath = Config.apiPath;

  // Content Type
  _contentTypeJson = 'application/json';
  _contentTypeFromData = 'multipart/form-data';

  //Request Method
  _method;
  //Request Headers
  _headers;
  //Api endpoint
  _path;
  //URL Params
  _params;
  //Body Params
  _body;
  //Fetch URL
  _fetchURL;
  //Request Response
  _response;
  //Parsed Response
  _parsedResponse;
  //Request result: set true if network transaction and response are valid
  _success = false;

  constructor(props = {}) {
    if (!props.path) {
      throw new AppError(Responses.API_PATH_REQUIRED);
    }

    this._path = props.path;
    this._token = props.accessToken;
    this._params = props.urlParams;
    this._body = props.bodyParams;
    this._headers = props.headers;
    this._fetchParams = props.fetchParams;
    this._formData = props.formData;

    this._fetchURL =
      this._baseURL +
      this._apiPath +
      this._path +
      this._buildURLParams(this._params);
  }

  async _fetch() {
    const fetchParams = {
      method: this._method,
      headers: {
        'Content-Type': this._formData
          ? this._contentTypeFromData
          : this._contentTypeJson,
          'X-Requested-With': "XMLHttpRequest",
        ...this._headers,
      },
      ...this._fetchParams,
    };

    if (this._token) {
      fetchParams.headers.Authorization = `Bearer ${this._token.trim()}`;
    }

    if (this._formData) {
      fetchParams.body = this._formData;
    } else if (this._body) {
      fetchParams.body = JSON.stringify(decamelizeKeys(this._body));
    }

    this._response = await fetch(this._fetchURL, fetchParams);

    this._parsedResponse = await this._parseResponse(this._response);

    console.log(this._response);

    //debug purposes
    console.log(this._fetchURL, fetchParams, this._response, this._parsedResponse);

    return this._parsedResponse;
  }

  async _parseResponse(response) {
    let parsedResponse;
    try {
      // NOTE:
      // All keys in the server side are snake_case format
      // We use camelcaseKeys to set camelCase format, used in app side
      parsedResponse = await response.json();
      parsedResponse = camelcaseKeys(parsedResponse);

      switch (response.status) {
        case 200: {
          this._success = true;
          break;
        }
        case 201: {
          this._success = true;
          break;
        }
        case 422: {
          parsedResponse = {
            ...Responses.RESPONSE_BAD_REQUEST,
            ...parsedResponse,
          };
          this._success = true;
          break;
        }
        case 400: {
          parsedResponse = {
            ...Responses.RESPONSE_BAD_REQUEST,
            ...parsedResponse,
          };
          this._success = true;
          break;
        }
        case 401: {
          parsedResponse = {
            ...Responses.RESPONSE_ACCESS_DENIED,
            ...parsedResponse,
          };
          this._success = true;
          break;
        }
        case 404: {
          parsedResponse = {
            ...Responses.RESPONSE_NOT_FOUND,
            ...parsedResponse,
          };
          this._success = true;
          break;
        }
        default: {
          parsedResponse = Responses.RESPONSE_SERVER_ERROR;
        }
      }
    } catch (error) {
      parsedResponse = Responses.RESPONSE_SERVER_ERROR;
    }

    return parsedResponse;
  }

  _buildURLParams(params) {
    // NOTE:
    // All keys in the app are camelCase format
    // We use decaleizeKeys to set snake_case format, used in server side

    return params
      ? '?' +
          map(decamelizeKeys(params), (value, key) => {
            return value || value === '' ? key + '=' + value : key;
          }).join('&')
      : '';
  }

  /*
   * Public functions
   */

  async get() {
    this._method = 'GET';

    const response = await this._fetch();

    return response;
  }

  async post() {
    this._method = 'POST';

    const response = await this._fetch();

    return response;
  }

  async put() {
    this._method = 'PUT';

    const response = await this._fetch();

    return response;
  }

  async delete() {
    this._method = 'DELETE';

    const response = await this._fetch();

    return response;
  }

  success() {
    return this._success;
  }
}
