import { all, put,delay,takeLatest,take,call ,fork, select} from 'redux-saga/effects'
// all 用来启动一个或者多个 effects
function* increment(params) {
    // 延迟调用
    // yield delay(1000)
    // 创建Effect并调用fn函数
    // yield call(fn,args)
    // 相当于：dispatch({ type: 'increment' })
    yield put({ type: 'ADD' })
}
function* watchIncrement() {
    // 监听类型为increment_saga的action，监听到启动 increment
    // yield takeEvery('A', increment)
    // 对于异步action 只执行最后一次
    // yield takeLatest('A', increment)
    // 阻塞调用
    // yield take('A')
    // 非阻塞调用
    // yield fork('A')
}
// 自定义takeEvery
function* takeEvery(pattern,fn,...args){
    function* help(){
        while (true){
            yield take(pattern)
            yield fork(fn)
            const res = yield select()
            console.log(res)
        }
    }
    return yield fork(help)
}
function* watchIn(){
    yield takeEvery('A',increment)
}

function* rootSaga() {
    // 启动watchIncrement
    yield all([watchIncrement(),watchIn()])
}
export default rootSaga

