import AppDispatcher from '../AppDispatcher';
import CounterStore from './CounterStore';
import ActionTypes from "../ActionTypes";
function computeSummary(counterValues) {
    var sum = 0;
    for (var i in counterValues) {
        sum += counterValues[i]
    }
    return sum;
}

const SummaryStore = Object.assign({}, EventEmitter.prototype, {
    getSummary: function () {
        return computeSummary(CounterStore.getCounterValues)
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback)
    },
    removeChangeListernr: function (callback) {
        this.removeListener(CHANGE_EVENT, callback)
    },
});
SummaryStore.dispatcherToken = AppDispatcher.register((action) => {
    if (action.type === ActionTypes.DECREMENT || action.type === ActionTypes.INCEMENT) {
        AppDispatcher.waitFor(CounterStore.dispationToken);
        SummaryStore.emitChange();
    }
});
export default SummaryStore;