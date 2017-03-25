interface CRUD<T> {
    create(item: T):boolean
    list(): Promise<T>
}
class CRUD<T> implements CRUD<T>{
    public items: Array<T> = [];
    create(item: T): boolean {
        this.items.push(item)
        return true
    }
    list(): Promise<T> {
        return new Promise((resolve, reject) => {
            return resolve(this.items);
        })
    }
}

class Person {
    public nome: String;
}
class Client extends CRUD<Person> {
}
class Chief extends CRUD<Person> {

}

const client = new Client()
const chief = new Chief()

client.create(<Person> { nome: 'Cliente'})
client.create(<Person> { nome: 'Cliente1'})

chief.create(<Person> { nome: 'Chief'})
chief.create(<Person> { nome: 'Chief1'})

async function getItens () {
    const chiefs = await chief.list();
    const clients = await chief.list();
    return { chiefs, clients}
}

getItens()
    .then(success => console.log(`Success: ${JSON.stringify(success)}`))
    
 
 
