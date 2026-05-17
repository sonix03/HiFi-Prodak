import { HeaderAction } from "./Header";
import Icon from "./Icon";

export default function ProfileHeader({ onBack, onShare, onSearch, showSearch = true, showMore = false, onMore }) {
  return (
    <header className="app-header app-header-profile">
      <div className="header-main">
        <button className="header-action" onClick={onBack} aria-label="Back">
          <Icon name="arrowLeft" size={22} />
        </button>
      </div>
      <div className="header-actions">
        <HeaderAction icon="share" label="Share profile" onClick={onShare} />
        {showSearch ? <HeaderAction icon="search" label="Search" onClick={onSearch} /> : null}
        {showMore ? <HeaderAction icon="more" label="More profile options" onClick={onMore} /> : null}
      </div>
    </header>
  );
}
