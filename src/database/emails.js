import { v4 as uuidv4 } from "uuid";

const emails = [
  {
    id: uuidv4(),
    sender: "test@gmail.com",
    title: "Home Work 1 Deadline",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
		dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
		commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
		Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    id: uuidv4(),
    sender: "temen2@gmail.com",
    title: "Invitation: Main Futsal",
    body: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
		totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
		sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
		consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem 
		ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut 
		labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam 
		corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit 
		qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
  },
  {
    id: uuidv4(),
    sender: "hello@tiket.com",
    title: "Terbang makin nyaman dan aman dengan protokol kesehatan!",
    body: `Nikmati penerbangan yang lebih menenangkan dengan tiket CLEAN yang memastikan kebersihan pesawatmu!
		Temukan rute pesawat berlabel tiket CLEAN di aplikasi tiket.com sekarang!`,
  },
  {
    id: uuidv4(),
    sender: "hello@ovo.com",
    title: "CUMA 2 HARI! CASHBACK 50% McDonald’s",
    body: "",
  },
];

export default emails;
