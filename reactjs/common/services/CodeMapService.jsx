import AjaxUtil from '../../common/util/AjaxUtil';
import {CODE_MAP_URL} from '../constants/CommonConstants';

class CodeMapService {
    getCodeMap(success) {
        return AjaxUtil.ajaxGet(CODE_MAP_URL, null, success, null, null, true);
    }
}

export default new CodeMapService();