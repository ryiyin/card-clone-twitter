import { useState } from "react";

export function TwitterFollowCards({ userName, name, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const addAt = (userName) => `@${userName}`;
  const textFollow = isFollowing ? "follow" : "unfollowing";
  const buttonFollowClassname = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  return (
    <article className="tw-followCard-article">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/readcv/${userName}`}
          alt="avatar"
        />
        <div className="tw-followCard-userAndName">
          <strong>{name}</strong>
          <span>{addAt(userName)}</span>
        </div>
      </header>

      <aside>
        <button
          className={buttonFollowClassname}
          onClick={() => {
            setIsFollowing(!isFollowing);
          }}
        >
          {textFollow}
        </button>
      </aside>
    </article>
  );
}
