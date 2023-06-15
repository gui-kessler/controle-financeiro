export class Storage
{
    storage: globalThis.Storage;

    constructor(type: 'session' | 'local') {
        switch (type) {
            case 'local':
                this.storage = localStorage;
                break;
            case 'session':
                this.storage = sessionStorage;
                break;
        }
    }

    get(key: string): string | null {
        return this.storage.getItem(key);
    }

    set(key: string, value: string): void {
        this.storage.setItem(key, value);
    }

    delete(key: string): void {
        this.storage.removeItem(key);
    }

    clear(): void {
        this.storage.clear();
    }
}