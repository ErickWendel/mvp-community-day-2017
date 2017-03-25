var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class CRUD {
    constructor() {
        this.items = [];
    }
    create(item) {
        this.items.push(item);
        return true;
    }
    list() {
        return new Promise((resolve, reject) => {
            return resolve(this.items);
        });
    }
}
class Person {
}
class Client extends CRUD {
}
class Chief extends CRUD {
}
const client = new Client();
const chief = new Chief();
client.create({ nome: 'Cliente' });
client.create({ nome: 'Cliente1' });
chief.create({ nome: 'Chief' });
chief.create({ nome: 'Chief1' });
function getItens() {
    return __awaiter(this, void 0, void 0, function* () {
        const chiefs = yield chief.list();
        const clients = yield chief.list();
        return { chiefs, clients };
    });
}
getItens()
    .then(success => console.log(`Success: ${JSON.stringify(success)}`));
