class User {
  username: string;
  #password: string;
  constructor(sandi: string, nama: string) {
    this.#password = sandi;
    this.username = nama;
  }

  checkPassword(username: string) {
    if (username === this.username) {
      console.log(this.#password);
    }
  }
}

const user1 = new User("pleaseinputpasswords", "Ara");
console.log(user1.checkPassword("Ara"));
