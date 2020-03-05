export const users: IUser[] = [
  {
    id: 2,
    name: "Leonid",
    avatar: "avatars/Leonid.jpg"
  },
  {
    id: 3,
    name: "Scream Smith",
    avatar: "avatars/Scream.jpg"
  },
  {
    id: 4,
    name: "Franz Kafka",
    avatar: "avatars/Franz.jpg"
  },
  {
    id: 5,
    name: "Gregor Zamza",
    avatar: "avatars/Gregor.jpg"
  }
];

interface IChat {
  id: number;
  users: number[];
  messages: IMessage[];
}

interface INeededChat {
  id: number;
  numberOfUnread: number;
  lastMessage: IMessage;
  companion: IUser;
}

interface IUser {
  id: number;
  name: string;
  avatar: string;
}

interface IMessage {
  senderId: number;
  text: string;
  date: string;
  read: boolean;
}

const chats: IChat[] = [
  {
    id: 1,
    users: [1, 2],
    messages: [
      {
        senderId: 2,
        text: "Придёшь сегодня на игру?",
        date: "2019-09-11T13:54:50.417",
        read: true
      },
      {
        senderId: 2,
        text: "Придёшь сегодня на игру?",
        date: "2019-09-11T13:55:50.417",
        read: true
      },
      {
        senderId: 1,
        text: "Та не.",
        date: "2019-12-12T13:55:50.417",
        read: true
      },
      {
        senderId: 1,
        text: "Та не.",
        date: "2019-12-12T13:56:50.417",
        read: true
      },
      {
        senderId: 1,
        text: "Та не.",
        date: "2019-12-13T13:56:50.417",
        read: true
      },
      {
        senderId: 2,
        text: "А чё?",
        date: "2020-01-13T13:57:50.417",
        read: false
      }
    ]
  },
  {
    id: 2,
    users: [1, 3],
    messages: [
      {
        senderId: 3,
        text: "Hi",
        date: "2017-12-11T13:51:50.417",
        read: false
      },
      {
        senderId: 3,
        text: "Are you here?",
        date: "2018-12-11T13:52:50.417",
        read: false
      },
      {
        senderId: 3,
        text: "DAMN! Are you ok? I promise",
        date: "2019-12-11T13:53:50.417",
        read: false
      }
    ]
  },
  {
    id: 3,
    users: [1, 4],
    messages: [
      {
        senderId: 1,
        text: "I am already done with those",
        date: "2019-12-11T13:49:50.417",
        read: false
      }
    ]
  },
  {
    id: 4,
    users: [1, 5],
    messages: [
      {
        senderId: 5,
        text: "How are you, body?",
        date: "2019-09-11T13:40:50.417",
        read: true
      }
    ]
  }
];

const texts = [
  "Привет!",
  "Как дела?",
  "Что нового?",
  "Ответь срочно!",
  "Да.",
  "Нет.",
  "Погода плохая",
  "Я с тобой больше не разговариваю"
];

async function allChats(currentUserId: number) {
  return emulateRequest().then(() => {
    const neededChats: INeededChat[] = [];
    let neededChat: INeededChat = {} as INeededChat;
    chats.forEach(chat => {
      let companion: IUser = {} as IUser;
      let lastMessage: IMessage = {} as IMessage;
      let numberOfUnread: number = 0;
      if (chat.users.includes(currentUserId)) {
        neededChat = { ...neededChat, id: chat.id };
        if (chat.messages.length !== 0) {
          lastMessage = chat.messages[chat.messages.length - 1];
          const messages = chat.messages.concat().reverse();
          let i = 0;
          let f = 0;
          while (i < messages.length && f === 0) {
            if (!messages[i].read && messages[i].senderId !== currentUserId) {
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
    neededChats.sort((a, b): number => {
      if (new Date(a.lastMessage.date) < new Date(b.lastMessage.date)) {
        return 1;
      }
      if (new Date(a.lastMessage.date) > new Date(b.lastMessage.date)) {
        return -1;
      }

      return 0;
    });

    return neededChats;
  });
}

async function getDialog(currentUserId: number, dialogId: number) {
  return emulateRequest().then(() => {
    let neededChat: object = {};
    let companion: object = {};
    const resultDialog = chats.find(chat => {
      return chat.id === dialogId;
    });
    if (resultDialog !== undefined) {
      neededChat = {
        ...neededChat,
        id: resultDialog.id,
        messages: resultDialog.messages
      };
      resultDialog.users.forEach(memberId => {
        const resultUser = users.find(user => {
          return user.id !== currentUserId && user.id === memberId;
        });
        if (resultUser !== undefined) {
          companion = resultUser;
        }
      });
      neededChat = { ...neededChat, companion };
    }

    return neededChat;
  });
}

function generateMessage() {
  const message: IMessage = {
    senderId: users[Math.floor(Math.random() * users.length)].id,
    read: false,
    text: texts[Math.floor(Math.random() * texts.length)],
    date: new Date().toISOString()
  };

  return message;
}

async function addMessage(currentUserId: number) {
  const message = generateMessage();
  const chatId = chats.findIndex(chat => {
    return (
      chat.users.some(user => user === message.senderId) &&
      chat.users.some(user => user === currentUserId)
    );
  });
  if (chatId !== -1) {
    const messages = [...chats[chatId].messages];
    messages.push(message);
    chats[chatId].messages = messages;
  }

  return `${chats[chatId].id},${chats[chatId].messages.length}`;
}

async function sendMessages(
  currentUserId: number,
  openedChat: number,
  text: string
) {
  return emulateRequest().then(() => {
    const message: IMessage = {
      senderId: currentUserId,
      read: false,
      text,
      date: new Date().toISOString()
    };
    const chatId = chats.findIndex(chat => {
      return chat.id === openedChat;
    });
    if (chatId !== -1) {
      const messages = [...chats[chatId].messages];
      messages.push(message);
      chats[chatId].messages = messages;
    }

    return `${message.date}`;
  });
}

async function emulateRequest(timeout: number = 0) {
  return new Promise(resolve => {
    window.setTimeout(resolve, timeout);
  });
}

export { allChats, getDialog, addMessage, sendMessages };
