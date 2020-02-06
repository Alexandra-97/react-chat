const currentUser = {
  id: 0,
  name: "Alex",
  avatar: ""
};

export const users = [
  {
    id: 1,
    name: "Leonid",
    avatar: "../images/Leonid.jpg"
  },
  {
    id: 2,
    name: "Scream Smith",
    avatar: ""
  },
  {
    id: 3,
    name: "Franz Kafka",
    avatar: ""
  },
  {
    id: 4,
    name: "Gregor Zamza",
    avatar: ""
  }
];

const chats = [
  {
    id: 1,
    users: [0, 1],
    messages: [
      {
        senderId: 1,
        text: "Придёшь сегодня на игру?",
        date: "2019-12-11T13:51:50.417-07:00",
        read: true
      }
    ]
  },
  {
    id: 2,
    users: [0, 2],
    messages: [
      {
        senderId: 2,
        text: "DAMN! Are you ok? I promise",
        date: "2019-12-11T13:51:50.417-07:00",
        read: false
      }
    ]
  }
];

async function allChats() {
  return emulateRequest().then(() => {
    return chats.map(chat => {
      return chat;
    });
  });
}

async function emulateRequest(timeout: number = 200) {
  return new Promise(resolve => {
    window.setTimeout(resolve, timeout);
  });
}

export { allChats };
