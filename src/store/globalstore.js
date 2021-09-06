// import { observable, makeObservable, action, runInAction } from 'mobx';
import { observable } from 'mobx';
export class GlobalStore {
    @observable count = 0;
}