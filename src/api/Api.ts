export const users = [
  {
    id: 1,
    name: "Leonid",
    avatar: "avatars/Leonid.jpg"
  },
  {
    id: 2,
    name: "Scream Smith",
    avatar: "avatars/Scream.jpg"
  },
  {
    id: 3,
    name: "Franz Kafka",
    avatar: "avatars/Franz.jpg"
  },
  {
    id: 4,
    name: "Gregor Zamza",
    avatar: "avatars/Gregor.jpg"
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
        date: "2019-12-11T13:55:50.417",
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
        text: "Hi",
        date: "2019-12-11T13:51:50.417",
        read: false
      },
      {
        senderId: 2,
        text: "Are you here?",
        date: "2019-12-11T13:52:50.417",
        read: false
      },
      {
        senderId: 2,
        text: "DAMN! Are you ok? I promise",
        date: "2019-12-11T13:53:50.417",
        read: false
      }
    ]
  },
  {
    id: 3,
    users: [0, 3],
    messages: [
      {
        senderId: 0,
        text: "I am already done with those",
        date: "2019-12-11T13:49:50.417",
        read: false
      }
    ]
  },
  {
    id: 4,
    users: [0, 4],
    messages: [
      {
        senderId: 4,
        text: "How are you, body?",
        date: "2019-12-11T13:40:50.417",
        read: true
      }
    ]
  }
];

async function allChats(currentUserId: number) {
  return emulateRequest().then(() => {
    const neededChats: object[] = [];
    let neededChat: object = {};
    chats.forEach(chat => {
      let companion: object = {};
      let lastMessage: object = {};
      let numberOfUnread: number = 0;
      if (chat.users.includes(currentUserId)) {
        neededChat = { ...neededChat, id: chat.id };
        if (chat.messages.length !== 0) {
          lastMessage = chat.messages[chat.messages.length - 1];
          const messages = chat.messages.concat().reverse();
          let i = 0;
          let f = 0;
          while (i < messages.length && f === 0) {
            if (!messages[i].read) {
              numberOfUnread++;
            } else {
              f = 1;
            }
            i++;
          }
        }
        neededChat = {
          ...neededChat,
          lastMessage,
          numberOfUnread
        };
        chat.users.forEach(memberId => {
          const result = users.find(user => {
            return user.id !== currentUserId && user.id === memberId;
          });
          if (result !== undefined) {
            companion = result;
          }
          neededChat = { ...neededChat, companion };
        });
        neededChats.push(neededChat);
      }
    });

    return neededChats;
  });
}

async function emulateRequest(timeout: number = 200) {
  return new Promise(resolve => {
    window.setTimeout(resolve, timeout);
  });
}

export { allChats };
