import AjaxUtil from '../../common/util/AjaxUtil';
import {CPF_CALCULATION_URL} from '../constants/CommonConstants';

class CPFService {
    getCPFContributions(data, success) {
        return AjaxUtil.ajaxPost(CPF_CALCULATION_URL, data, success, null, null, true);
    }
}

export default new CPFService();