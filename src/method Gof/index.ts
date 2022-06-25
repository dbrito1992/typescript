export class DataBase {
  private static dataBase: DataBase;
  private constructor(
    private host: string,
    private user: string,
    private pssword: string,
  ) {}

  connected(): void {
    console.log(
      `Conetado: Host=${this.host}, User=${this.user}, Password=${this.pssword}...`,
    );
  }

  static getDataBase(host: string, user: string, pssword: string): DataBase {
    if (DataBase.dataBase) {
      console.log('Instancia criada....');
      return DataBase.dataBase;
    }
    DataBase.dataBase = new DataBase(host, user, pssword);
    return DataBase.dataBase;
  }
}

const db1 = DataBase.getDataBase('localhost', 'root', '123456');
db1.connected();
const db2 = DataBase.getDataBase('localhost', 'root', '123456');
console.log(db1 == db2);
