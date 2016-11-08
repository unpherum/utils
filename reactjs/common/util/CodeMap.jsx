/**
 * Created by zhihua on 8/29/16.
 */
import CodeMapService from '../services/CodeMapService';

class CodeMap {
    constructor() {
        this._codes = null;
    }

    getNationalityLookup() {
        if (this._codes) {
            return this._codes.nationality;
        }
    }

    getAssetTypes() {
        if (this._codes) {
            return this._codes.asset_types.concat({
                "asset_class": "OTHERS",
                "description": "Others",
                types: [{
                    asset_class: "OTHERS",
                    type: "OTHERS",
                    description: "Others"
                }]
            });
        }
    }

    getReturnRates() {
        if (this._codes) {
            return this._codes.return_rate;
        }
    }

    getExpenseTypes() {
        if (this._codes) {
            return this._codes.expense_types.concat({
                type: "OTHERS",
                description: "Others",
                types: [{
                    category: "OTHERS",
                    type: "OTHERS",
                    description: "Others"
                }]
            });
        }
    }

    getIncomeTypes() {
        if (this._codes) {
            return this._codes.income_sources.concat({
                income_type: "A",
                source: "OTHERS",
                description: "Others"
            });
        }
    }

    getLiabilityTypes() {
        if (this._codes) {
            return this._codes.liability_types.concat({
                type: "OTHERS",
                description: "Others"
            });
        }
    }

    getGoalTypes() {
        if (this._codes) {
            return this._codes.goal_types;
        }
    }

    getPlanTypes() {
        if (this._codes) {
            return this._codes.plan_types;
        }
    }

    getLiabilityTypeDescription(liabilityType) {
        if (this._codes) {
            var liabilities = this._codes.liability_types;
            for (var i=0; i<liabilities.length; i++) {
                if (liabilities[i].type === liabilityType) {
                    return liabilities[i].description;
                }
            }
        }
        return "";
    }

    getIncomeTypeDescription(incomeType) {
        if (this._codes) {
            var incomes = this._codes.income_sources;
            for (var i=0; i<incomes.length; i++) {
                if (incomes[i].source === incomeType) {
                    return incomes[i].description;
                }
            }
        }
        return "";
    }

    getExpenseTypeDescription(expenseType) {
        if (this._codes) {
            var expenses = this._codes.expense_types;
            for (var i=0; i<expenses.length; i++) {
                var expense = expenses[i];
                if (expense && expense.types) {
                    for (var j=0; j<expense.types.length; j++) {
                        var subtype = expense.types[j];
                        if (subtype.type === expenseType) {
                            return subtype.description;
                        }
                    }
                }
            }
        }
        return "";
    }

    getExpenseTypeDescriptionBySubtype(expenseType) {
        if (this._codes) {
            var expenses = this._codes.expense_types;
            for (var i=0; i<expenses.length; i++) {
                var expense = expenses[i];
                if (expense && expense.types) {
                    for (var j=0; j<expense.types.length; j++) {
                        var subtype = expense.types[j];
                        if (subtype.type === expenseType) {
                            return expense.description;
                        }
                    }
                }
            }
        }
        return "";
    }

    getAssetTypeDescription(assetType) {
        if (this._codes) {
            var assets = this._codes.asset_types;
            for (var i=0; i<assets.length; i++) {
                var asset = assets[i];
                if (asset && asset.types) {
                    for (var j=0; j<asset.types.length; j++) {
                        var subtype = asset.types[j];
                        if (subtype.type === assetType) {
                            return subtype.description;
                        }
                    }
                }
            }
        }
        return "";
    }

    getAssetTypeDescriptionBySubtype(assetType) {
        if (this._codes) {
            var assets = this._codes.asset_types;
            for (var i=0; i<assets.length; i++) {
                var asset = assets[i];
                if (asset && asset.types) {
                    for (var j=0; j<asset.types.length; j++) {
                        var subtype = asset.types[j];
                        if (subtype.type === assetType) {
                            return asset.description;
                        }
                    }
                }
            }
        }
        return "";
    }

    getNationalityDescriptionByCode(nationalCode) {
        if (this._codes) {
            var country = this._codes.nationality.find(x=>(x.value === nationalCode));
            if (country) {
                return country.label;
            }
        }
        return "";
    }

    getPlanTypeDescriptionByCode(planCode) {
        if (this._codes) {
            var type = this._codes.plan_types.find(x=>(x.code === planCode));
            if (type) {
                return type.description;
            }
        }
        return "";
    }

    loadCodeMap() {
        var self = this;
        var localCodeMap = JSON.parse(window.localStorage.getItem("CODEMAP"));
        if (localCodeMap) {
            self._codes = localCodeMap;
        } else {
            CodeMapService.getCodeMap(function(response) {
                self._codes = response;
                window.localStorage.setItem("CODEMAP", JSON.stringify(self._codes));
            });
        }
    }
}

export default new CodeMap();