class CinemaBooking {
  private dataBooking = new Map<string, string>();

  book(seat: string, name: string) {
    if (this.dataBooking.has(seat)) console.log("Sudah dibooking");
    this.dataBooking.set(seat, name);
  }

  changeBooker(seat: string, name: string) {
    this.dataBooking.set(seat, name);
  }

  getBooker(seat: string) {
    return this.dataBooking.get(seat);
  }
}

const cinema = new CinemaBooking();
cinema.book("A1", "Rina");
cinema.book("B2", "Bayu");

console.log(cinema.getBooker("A1"));

cinema.changeBooker("A1", "Dina");
console.log(cinema.getBooker("A1"));
cinema.book("B2", "Tono");
