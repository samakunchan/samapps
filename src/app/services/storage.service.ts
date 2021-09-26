import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async setObject(key: string, value: any) {
    await Storage.set({
      key,
      value: JSON.stringify(value)
    });
  }

  async getObject(key): Promise<{value: any}> {
    const ret = await Storage.get({ key });
    return JSON.parse(ret.value);
  }

  async removeItem(key) {
    await Storage.remove({ key });
  }

  async clear() {
    await Storage.clear();
  }
}
