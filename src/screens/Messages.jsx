import { useState } from "react";
import Icon from "../components/Icon";
import NewMessageSheet from "../components/NewMessageSheet";
import avatar from "../assets/avatar.png";
import { messageThreads } from "../constants/data";
import MessageDetail from "./MessageDetail";

function MessageRow({ thread, onOpen }) {
  return (
    <button className="flex w-full items-center gap-4 px-6 py-4 text-left" onClick={() => onOpen(thread)} type="button">
      <img className="h-[54px] w-[54px] shrink-0 rounded-full object-cover" src={avatar} alt="" />
      <div className="min-w-0 flex-1">
        <h2 className="truncate text-[17px] font-black leading-tight tracking-normal text-[var(--text)]">{thread.name}</h2>
        <p className="mt-1 truncate text-[14px] font-medium text-[var(--text-secondary)]">{thread.preview}</p>
      </div>
      <div className="flex shrink-0 items-center gap-2 text-[13px] font-medium text-[var(--text-secondary)]">
        <Icon name="check" size="xs" stroke={2} />
        <span>{thread.time}</span>
      </div>
    </button>
  );
}

export default function Messages({ onNavigate, initialNewMessage = false }) {
  const [activeThread, setActiveThread] = useState(null);
  const [showNewMessage, setShowNewMessage] = useState(initialNewMessage);

  if (activeThread) {
    return <MessageDetail bottomInset thread={activeThread} onBack={() => setActiveThread(null)} />;
  }

  return (
    <main className="screen relative flex h-full flex-col bg-white">
      <header className="relative flex h-[74px] shrink-0 items-center border-b border-[var(--border)] bg-white px-5 shadow-[var(--shadow-header)]">
        <button className="row gap-2 text-[18px] font-medium text-[var(--text)]" onClick={() => onNavigate?.("feed")} type="button">
          <Icon name="arrowLeft" size="lg" stroke={2} />
          <span>Home</span>
        </button>
        <h1 className="pointer-events-none absolute left-1/2 -translate-x-1/2 text-[20px] font-black tracking-normal">Messages</h1>
        <button className="ml-auto grid h-10 w-10 place-items-center text-[var(--text)]" onClick={() => setShowNewMessage(true)} type="button" aria-label="Compose message">
          <Icon name="edit" size={26} stroke={2} />
        </button>
      </header>

      <section className="flex-1 overflow-y-auto pb-[108px]">
        {messageThreads.map((thread) => (
          <MessageRow key={thread.id} thread={thread} onOpen={setActiveThread} />
        ))}
      </section>
      {showNewMessage ? (
        <NewMessageSheet
          onClose={() => setShowNewMessage(false)}
          onCreate={() => {
            setShowNewMessage(false);
            setActiveThread(messageThreads[0]);
          }}
        />
      ) : null}
    </main>
  );
}
