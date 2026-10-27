// ---------- i18n ----------
const I18N = {
  en: {
    nav_home: 'Home', nav_tasks: 'Tasks', nav_cal: 'Calendar', nav_habits: 'Habits', nav_diary: 'Diary',
    stat_today: 'Tasks due today', stat_open: 'Open tasks',
    week_events: 'This Week', show_later: 'Show later events', hide_later: 'Hide later events',
    upcoming: 'Upcoming Tasks', recent_done: 'Recently Completed',
    important: '⭐ High Priority', empty_important: 'No high-priority tasks',
    add_task: 'Add a Task', task_name_ph: 'Task name', tag_ph: 'Tag', add: 'Add',
    priority_high: 'Priority: High', priority_mid: 'Priority: Medium', priority_low: 'Priority: Low',
    pri_high: 'High', pri_mid: 'Med', pri_low: 'Low',
    open_tasks: 'To Do', done_tasks: 'Completed',
    search_ph: 'Search tasks...', all_tags: 'All tags',
    add_goal: 'Add a Main Goal', goal_ph: 'Main goal (e.g. TOEIC 800)', goals: 'Goals',
    goal_hint: 'Click "+ Mid goal" on a main goal to add a mid goal, and "+ Sub goal" on a mid goal to add a sub goal. Each goal has its own progress — they are not linked.',
    notify_at_hint: 'The time field next to 🔔 sets a custom notification time (optional). If empty, notifications follow the default timing set on Home. Tap a task row to edit it, and use the ＋ button to add subtasks.',
    confirm_del: n => `Delete "${n}"?`,
    sub_ph: 'Subtask',
    add_habit: 'Add a Habit', habit_ph: 'Habit (e.g. English vocab, 10 min)', habits: 'My Habits',
    habit_hint: 'Tap a habit row to check off today. Tap a circle to toggle any day; use ← → to see past weeks. Set a ⏰ time for a daily reminder (only fires if not yet checked, while the page is open).',
    empty_habits: 'No habits yet', streak: 'streak',
    remind_title: 'Daily reminder (optional)', habit_notif_body: 'Time for your habit!',
    write_entry: 'Write an Entry', entry_ph: 'What happened today, how you felt...', save: 'Save',
    empty_events_week: 'No events this week', empty_events_later: 'No later events',
    empty_open: 'No open tasks 🎉', empty_done: 'Nothing completed yet', empty_due: 'No tasks with due dates',
    empty_goals: 'No goals yet', no_events_day: 'No events',
    undo: 'Undo', edit: 'Edit', done_suffix: '(done)', cancel: 'Cancel',
    lv: ['MAIN', 'MID', 'SUB'], add_lv: ['+ Mid goal', '+ Sub goal'], goal_name_ph: 'Goal name',
    event_ph: 'New event', add_event: 'Add Event', close: 'Close', settings: 'Settings',
    repeat_weekly: 'Repeat weekly', notify_this: '🔔 Notify',
    export: '⬇ Backup', import: '⬆ Restore', import_done: 'Data restored!', import_err: 'Could not read that file',
    ics_export: '📅 Export .ics', ics_import: '📅 Import .ics',
    ics_done: n => `Imported ${n} event(s)`, ics_err: 'Could not read that file',
    open_stats: '📊 Stats', back_home: '← Home',
    stats_rate: 'Completion — last 7 days', stats_pomo_total: '🍅 This week',
    stats_done: 'Tasks Completed — Last 7 Days', stats_pomo: 'Pomodoros — Last 7 Days',
    stats_pri: 'Open Tasks by Priority', stats_mood: 'Mood — Last 7 Days', stats_habits: 'Habits',
    range_week: 'Week', range_month: 'Month',
    start: 'Start', pause: 'Pause', reset: 'Reset', focus: 'Focus', brk: 'Break',
    pomo_count: n => `🍅 ${n} today`,
    notif_off: '🔔 Reminders: off', notif_on: '🔔 Reminders: on', notif_blocked: '🔕 Notifications blocked',
    notify_when: 'Notify:', off_0: 'At time', off_5: '5 min before', off_15: '15 min before', off_30: '30 min before', off_60: '1 hr before', off_1440: '1 day before',
    sound_label: 'Sound:', snd_beep: 'Beep', snd_chime: 'Chime', snd_bell: 'Bell', snd_none: 'None',
    theme_label: 'Theme:', th_auto: 'Auto', th_light: 'Light', th_dark: 'Dark',
    sync_label: 'Sync:', sync_setup: '☁ Set up sync', sync_login: 'Sign in with Google', sync_logout: 'Sign out',
    sync_remove: 'Remove config', sync_save: 'Save & reload', sync_ok: 'Synced', sync_err: 'Sync error',
    sync_bad: 'Could not read the config', sync_ph: 'Paste your firebaseConfig here (the { ... } part)',
    pomo_min: 'min',
    deleted: s => `Deleted "${s}"`,
    no_entry: d => `No entry for ${d}. Write one above!`,
    dows: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
    months: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    monthsFull: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    fmtDate: s => { const [y,m,d] = s.split('-').map(Number); const dt = new Date(y, m-1, d); return `${I18N.en.dows[dt.getDay()]}, ${I18N.en.months[m-1]} ${d}`; },
    fmtDateFull: s => { const [y,m,d] = s.split('-').map(Number); return `${I18N.en.monthsFull[m-1]} ${d}, ${y}`; },
    calTitle: (y,m) => `${I18N.en.monthsFull[m]} ${y}`,
    today_word: 'Today',
    import_confirm: 'Restoring replaces ALL current data (tasks, events, habits, diary, goals) with the backup. Continue?',
    del_one: 'This day only', del_after: 'This & later',
    repeat_none: 'No repeat', repeat_daily: 'Daily', repeat_weekly_opt: 'Weekly', repeat_monthly: 'Monthly', repeat_until: 'Until',
    del_label: 'Delete', prev: 'Previous', next: 'Next',
    nav_tasks_short: 'Tasks', due_label: 'Due', subtasks_label: 'Subtasks', mark_done: '○ Mark done', mark_undone: '✓ Done — tap to undo', quick_ph: 'Add a task…', today_habits: "Today's Habits", data_title: 'Data & Sync',
    more_opts: 'More options (tag, time, priority, reminder)',
    due_today: 'Today', due_tomorrow: 'Tomorrow', due_week: 'This week', due_next: 'Next week', due_none: 'No date',
    b_overdue: 'Overdue', b_today: 'Today', b_soon: 'Within 3 days', b_week: 'Within 7 days', b_later: 'Later', b_none: 'No due date',
    rel: n => n < 0 ? `${-n}d overdue` : n === 0 ? 'Today' : n === 1 ? 'Tomorrow' : `in ${n} days`,
    more_tasks: (a, b) => `${a ? 'Later: ' + a : ''}${a && b ? ' · ' : ''}${b ? 'No date: ' + b : ''} →`,
    all_tasks: 'All tasks →',
    hero_overdue: 'Past due', hero_today: 'Due today', hero_event: 'Coming up', hero_next: 'Next deadline',
    hero_none: 'Nothing due today 🎉', hero_none_sub: 'Add a task below, or enjoy the free time.',
    hero_done: 'Mark done', hero_open: 'Open', hero_edit: 'Edit event', hero_now: 'Happening now', hero_in: m => m >= 60 ? `in ${Math.floor(m/60)}h ${m%60}m` : `in ${m} min`, hero_then: 'Next task', hero_more: n => `+${n} more due today`,
    completed: s => `Completed "${s}"`,
    sum: (o, e) => `${o} open task${o === 1 ? '' : 's'} · ${e} event${e === 1 ? '' : 's'} today`,
    dateHead: s => I18N.en.fmtDateFull(s),
    diary_for: d => `Diary — ${d}`, diary_saved: 'Saved ✓'
  },
  ja: {
    nav_home: 'ホーム', nav_tasks: 'タスク', nav_cal: 'カレンダー', nav_habits: '習慣', nav_diary: '日記',
    stat_today: '今日締切のタスク', stat_open: '未完了タスク',
    week_events: '1週間の予定', show_later: 'それ以降の予定を表示', hide_later: 'それ以降の予定を隠す',
    upcoming: '期限が近いタスク', recent_done: '最近完了したタスク',
    important: '⭐ 重要なタスク', empty_important: '優先度「高」のタスクはありません',
    add_task: 'タスクを追加', task_name_ph: 'タスク名', tag_ph: 'タグ', add: '追加',
    priority_high: '優先度: 高', priority_mid: '優先度: 中', priority_low: '優先度: 低',
    pri_high: '高', pri_mid: '中', pri_low: '低',
    open_tasks: '未完了', done_tasks: '完了済み',
    search_ph: 'タスクを検索…', all_tags: 'すべてのタグ',
    add_goal: '大目標を追加', goal_ph: '大目標(例: TOEIC 800点)', goals: '進捗一覧',
    goal_hint: '大目標の「＋中目標」で中目標、中目標の「＋小目標」で小目標を追加できます。達成率はそれぞれ独立していて連動しません。',
    notify_at_hint: '🔔の隣の時刻欄で通知時刻を個別に指定できます(任意)。空欄ならホームで設定した通知タイミングに従います。タスクの行をタップすると編集、＋ボタンでサブタスクを追加できます。',
    confirm_del: n => `「${n}」を削除しますか?`,
    sub_ph: 'サブタスク',
    add_habit: '習慣を追加', habit_ph: '習慣(例: 英単語10分)', habits: '習慣リスト',
    habit_hint: '習慣の行をタップすると今日の分をチェックできます。丸をタップすると任意の日を切り替え、←→で過去の週も見られます。⏰時刻を設定すると、その時刻に未チェックの場合だけ通知が届きます(ページを開いている間のみ)。',
    empty_habits: '習慣はまだありません', streak: '日連続',
    remind_title: '毎日のリマインダー(任意)', habit_notif_body: '習慣の時間です!',
    write_entry: '記録を書く', entry_ph: '今日あったこと、思ったこと…', save: '保存',
    empty_events_week: '1週間以内の予定はありません', empty_events_later: 'それ以降の予定はありません',
    empty_open: '未完了のタスクはありません 🎉', empty_done: '完了したタスクはまだありません', empty_due: '期限付きタスクはありません',
    empty_goals: '目標はまだありません', no_events_day: '予定はありません',
    undo: '元に戻す', edit: '編集', done_suffix: '(完了)', cancel: 'キャンセル',
    lv: ['大', '中', '小'], add_lv: ['＋中目標', '＋小目標'], goal_name_ph: '目標名',
    event_ph: '予定を入力', add_event: '予定を追加', close: '閉じる', settings: '設定',
    repeat_weekly: '毎週繰り返す', notify_this: '🔔 通知する',
    export: '⬇ バックアップ', import: '⬆ 復元', import_done: 'データを復元しました!', import_err: 'ファイルを読み込めませんでした',
    ics_export: '📅 ICS書き出し', ics_import: '📅 ICS取り込み',
    ics_done: n => `${n}件の予定を取り込みました`, ics_err: 'ファイルを読み込めませんでした',
    open_stats: '📊 統計を見る', back_home: '← ホーム',
    stats_rate: '完了率(直近7日)', stats_pomo_total: '🍅 今週の合計',
    stats_done: '完了タスク数(直近7日)', stats_pomo: 'ポモドーロ(直近7日)',
    stats_pri: '未完了タスクの優先度内訳', stats_mood: '気分の推移(直近7日)', stats_habits: '習慣の達成',
    range_week: '週', range_month: '月',
    start: 'スタート', pause: '一時停止', reset: 'リセット', focus: '集中', brk: '休憩',
    pomo_count: n => `🍅 今日 ${n} 回`,
    notif_off: '🔔 通知: オフ', notif_on: '🔔 通知: オン', notif_blocked: '🔕 通知がブロックされています',
    notify_when: '通知タイミング:', off_0: '定刻', off_5: '5分前', off_15: '15分前', off_30: '30分前', off_60: '1時間前', off_1440: '前日',
    sound_label: '通知音:', snd_beep: 'ビープ', snd_chime: 'チャイム', snd_bell: 'ベル', snd_none: 'なし',
    theme_label: 'テーマ:', th_auto: '自動', th_light: 'ライト', th_dark: 'ダーク',
    sync_label: '同期:', sync_setup: '☁ 同期を設定', sync_login: 'Googleでログイン', sync_logout: 'ログアウト',
    sync_remove: '設定を削除', sync_save: '保存して再読み込み', sync_ok: '同期済み', sync_err: '同期エラー',
    sync_bad: '設定を読み取れませんでした', sync_ph: 'firebaseConfig({ ... }の部分)をここに貼り付け',
    pomo_min: '分',
    deleted: s => `「${s}」を削除しました`,
    no_entry: d => `${d}の記録はありません。上のフォームから書けます`,
    dows: ['日','月','火','水','木','金','土'],
    fmtDate: s => { const [y,m,d] = s.split('-').map(Number); const dt = new Date(y, m-1, d); return `${m}/${d}(${I18N.ja.dows[dt.getDay()]})`; },
    fmtDateFull: s => { const [y,m,d] = s.split('-').map(Number); return `${y}年${m}月${d}日`; },
    calTitle: (y,m) => `${y}年${m + 1}月`,
    today_word: '今日',
    import_confirm: '復元すると、現在のデータ(タスク・予定・習慣・日記・目標)がすべてバックアップの内容に置き換わります。続けますか?',
    del_one: 'この日だけ削除', del_after: 'この日以降を削除',
    repeat_none: '繰り返さない', repeat_daily: '毎日', repeat_weekly_opt: '毎週', repeat_monthly: '毎月', repeat_until: '終了日',
    del_label: '削除', prev: '前へ', next: '次へ',
    nav_tasks_short: 'タスク', due_label: '期限', subtasks_label: 'サブタスク', mark_done: '○ 完了にする', mark_undone: '✓ 完了済み(タップで戻す)', quick_ph: 'タスクを追加…', today_habits: '今日の習慣', data_title: 'データ・同期',
    more_opts: '詳細(タグ・時刻・優先度・通知)',
    due_today: '今日', due_tomorrow: '明日', due_week: '今週中', due_next: '来週', due_none: '期限なし',
    b_overdue: '期限超過', b_today: '今日', b_soon: '3日以内', b_week: '7日以内', b_later: 'それ以降', b_none: '期限なし',
    rel: n => n < 0 ? `${-n}日超過` : n === 0 ? '今日' : n === 1 ? '明日' : `あと${n}日`,
    more_tasks: (a, b) => `${a ? 'それ以降 ' + a + '件' : ''}${a && b ? '・' : ''}${b ? '期限なし ' + b + '件' : ''} →`,
    all_tasks: 'すべてのタスク →',
    hero_overdue: '期限が過ぎています', hero_today: '今日が締切', hero_event: 'もうすぐの予定', hero_next: '次の締切',
    hero_none: '今日が締切のものはありません 🎉', hero_none_sub: '下の欄からタスクを追加できます。',
    hero_done: '完了にする', hero_open: '開く', hero_edit: '予定を編集', hero_now: '開催中', hero_in: m => m >= 60 ? `あと${Math.floor(m/60)}時間${m%60 ? m%60 + '分' : ''}` : `あと${m}分`, hero_then: '次のタスク', hero_more: n => `今日締切がほかに ${n} 件`,
    completed: s => `「${s}」を完了しました`,
    sum: (o, e) => `未完了 ${o} 件・今日の予定 ${e} 件`,
    dateHead: s => { const [y,m,d] = s.split('-').map(Number); return `${m}月${d}日(${I18N.ja.dows[new Date(y,m-1,d).getDay()]})`; },
    diary_for: d => `${d}の日記`, diary_saved: '保存しました ✓'
  }
};
let lang = localStorage.getItem('planner_lang') || ((navigator.language || '').startsWith('ja') ? 'ja' : 'en');
const t = key => I18N[lang][key];

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  document.getElementById('btn-lang').textContent = lang === 'en' ? '🌐 日本語' : '🌐 English';
  document.getElementById('btn-task-add').textContent = editingTaskId ? t('save') : t('add');
  document.getElementById('btn-task-cancel').textContent = t('cancel');
  document.getElementById('btn-event-add').textContent = editingEventId ? t('save') : t('add_event');
  document.getElementById('btn-event-cancel').textContent = t('cancel');
  document.documentElement.lang = lang;
  updateNotifBtn();
  updatePomoUI();
  renderOffsetChips();
  renderSoundChips();
  renderThemeChips();
  renderSyncUI();
  if (document.getElementById('task-due-chips')) renderDueChips();
}
function toggleLang() {
  lang = lang === 'en' ? 'ja' : 'en';
  localStorage.setItem('planner_lang', lang);
  applyI18n();
  renderAll();
}

// ---------- Storage ----------
const store = {
  load(key, def) {
    try { return JSON.parse(localStorage.getItem('planner_' + key)) ?? def; }
    catch { return def; }
  },
  save(key, val) {
    if (ITEM_ID[key]) stampChanges(key, val);
    localStorage.setItem('planner_' + key, JSON.stringify(val));
    if (ITEM_ID[key]) markModified();
  },
  saveRaw(key, val) { localStorage.setItem('planner_' + key, JSON.stringify(val)); }
};

// ---------- Change tracking (for per-item sync) ----------
// Every item gets `updatedAt` when it changes; deleted ids are remembered (tombstones)
// so that syncing two devices keeps the newer version of each item instead of one whole side.
const ITEM_ID = { tasks: 'id', events: 'id', recurring: 'id', projects: 'id', habits: 'id', diary: 'date' };
const TOMB_TTL = 90 * 86400000;
// JSON with sorted keys, so the same data always gives the same string.
function stableStr(v) {
  if (Array.isArray(v)) return '[' + v.map(stableStr).join(',') + ']';
  if (v && typeof v === 'object') return '{' + Object.keys(v).sort().filter(k => v[k] !== undefined).map(k => JSON.stringify(k) + ':' + stableStr(v[k])).join(',') + '}';
  return JSON.stringify(v ?? null);
}
const itemSig = it => { const { updatedAt, ...rest } = it; return stableStr(rest); };
function loadTomb() {
  const tomb = store.load('tombstones', {});
  const cutoff = Date.now() - TOMB_TTL;
  Object.values(tomb).forEach(m => Object.keys(m).forEach(id => { if (m[id] < cutoff) delete m[id]; }));
  return tomb;
}
function stampChanges(key, list) {
  const idk = ITEM_ID[key];
  const prev = new Map(store.load(key, []).map(x => [x[idk], x]));
  const now = Date.now();
  list.forEach(it => {
    const p = prev.get(it[idk]);
    if (!p || itemSig(p) !== itemSig(it)) it.updatedAt = now;
    prev.delete(it[idk]);
  });
  if (prev.size) {
    const tomb = loadTomb();
    tomb[key] = tomb[key] || {};
    prev.forEach((_, id) => { tomb[key][id] = now; });
    store.saveRaw('tombstones', tomb);
  }
}

let tasks = store.load('tasks', []);
let events = store.load('events', []);
let recurring = store.load('recurring', []);
let projects = store.load('projects', []);
let diary = store.load('diary', []);
let habits = store.load('habits', []);
function fixProjects() {
  projects.forEach(p => { if (!p.children) p.children = []; p.children.forEach(c => { if (!c.children) c.children = []; }); });
}
fixProjects();

const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const dateToStr = d => d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
const todayStr = () => dateToStr(new Date());
const strToDate = s => { const [y,m,d] = s.split('-').map(Number); return new Date(y, m-1, d); };
const fmtDate = s => t('fmtDate')(s);
const fmtDateFull = s => t('fmtDateFull')(s);
const esc = s => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

// ---------- Backup / Restore ----------
const DATA_KEYS = ['tasks','events','recurring','projects','diary','habits'];
function exportData() {
  const data = { app: 'my-planner', exported: new Date().toISOString() };
  DATA_KEYS.forEach(k => data[k] = store.load(k, []));
  downloadBlob(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }), 'planner-backup-' + todayStr() + '.json');
}
function downloadBlob(blob, name) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 10000);
}
function reloadData() {
  tasks = store.load('tasks', []);
  events = store.load('events', []);
  recurring = store.load('recurring', []);
  projects = store.load('projects', []);
  diary = store.load('diary', []);
  habits = store.load('habits', []);
  fixProjects();
}
function importData(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (data.app !== 'my-planner') throw new Error('bad file');
      if (!confirm(t('import_confirm'))) { input.value = ''; return; }
      DATA_KEYS.forEach(k => { if (Array.isArray(data[k])) store.save(k, data[k]); });
      reloadData();
      showToastPlain(t('import_done'));
      renderAll();
    } catch {
      showToastPlain(t('import_err'));
    }
    input.value = '';
  };
  reader.readAsText(file);
}

// ---------- ICS export / import ----------
const ICS_DAYS = ['SU','MO','TU','WE','TH','FR','SA'];
const icsDate = ds => ds.replace(/-/g, '');
const icsEsc = s => s.replace(/\\/g, '\\\\').replace(/;/g, '\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n');
const icsUnesc = s => s.replace(/\\n/gi, '\n').replace(/\\,/g, ',').replace(/\;/g, ';').replace(/\\\\/g, '\\');
// Lines longer than 75 bytes must be folded (matters for Japanese titles).
function icsFold(line) {
  const enc = new TextEncoder();
  if (enc.encode(line).length <= 75) return line;
  const out = [];
  let cur = '', bytes = 0;
  for (const ch of line) {
    const n = enc.encode(ch).length;
    if (bytes + n > (out.length ? 74 : 75)) { out.push(cur); cur = ''; bytes = 0; }
    cur += ch; bytes += n;
  }
  out.push(cur);
  return out.join('\r\n ');
}
function exportICS() {
  const L = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//My Planner//JA', 'CALSCALE:GREGORIAN'];
  const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+/, '');
  const dt = (label, ds, tm) => tm ? `${label}:${icsDate(ds)}T${tm.replace(':','')}00` : `${label};VALUE=DATE:${icsDate(ds)}`;
  const nextDay = ds => { const d = strToDate(ds); d.setDate(d.getDate() + 1); return dateToStr(d); };
  const times = (ds, item) => {
    L.push(dt('DTSTART', ds, item.time));
    L.push(item.time ? dt('DTEND', ds, item.timeEnd || item.time) : dt('DTEND', nextDay(ds), ''));
  };
  events.forEach(e => {
    L.push('BEGIN:VEVENT', 'UID:' + e.id + '@myplanner', 'DTSTAMP:' + stamp, 'SUMMARY:' + icsEsc(e.title));
    times(e.date, e);
    L.push('END:VEVENT');
  });
  recurring.forEach(r => {
    L.push('BEGIN:VEVENT', 'UID:' + r.id + '@myplanner', 'DTSTAMP:' + stamp, 'SUMMARY:' + icsEsc(r.title));
    times(r.from, r);
    const freq = r.freq || 'weekly';
    let rule = 'RRULE:FREQ=' + freq.toUpperCase();
    if (freq === 'weekly') rule += ';BYDAY=' + ICS_DAYS[r.dow];
    if (r.until) rule += ';UNTIL=' + icsDate(r.until) + (r.time ? 'T235959' : '');
    L.push(rule);
    (r.except || []).forEach(ds => L.push(r.time ? `EXDATE:${icsDate(ds)}T${r.time.replace(':','')}00` : `EXDATE;VALUE=DATE:${icsDate(ds)}`));
    L.push('END:VEVENT');
  });
  L.push('END:VCALENDAR');
  downloadBlob(new Blob([L.map(icsFold).join('\r\n') + '\r\n'], { type: 'text/calendar' }), 'planner-events.ics');
}
function importICS(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const text = reader.result.replace(/\r?\n[ \t]/g, '');
      const blocks = text.split('BEGIN:VEVENT').slice(1);
      const ymd = v => v.slice(0,4) + '-' + v.slice(4,6) + '-' + v.slice(6,8);
      // Skip events that are already here: same UID, or same date + time + title.
      const known = new Set();
      [...events, ...recurring].forEach(x => {
        known.add('id:' + x.id);
        if (x.icsUid) known.add('uid:' + x.icsUid);
        known.add('k:' + (x.date || x.from) + '|' + (x.time || '') + '|' + x.title);
      });
      let count = 0;
      blocks.forEach(b => {
        b = b.split('END:VEVENT')[0];
        const get = re => { const m = b.match(re); return m ? m[1].trim() : ''; };
        const summary = icsUnesc(get(/^SUMMARY[^:\r\n]*:(.+)$/m)).trim();
        const dtm = b.match(/DTSTART[^:\n]*:(\d{8})(?:T(\d{4}))?\d*(Z?)/);
        if (!summary || !dtm) return;
        let ds = ymd(dtm[1]);
        let tm = dtm[2] ? dtm[2].slice(0,2) + ':' + dtm[2].slice(2,4) : '';
        if (dtm[3] === 'Z' && tm) {
          const d = new Date(Date.UTC(+dtm[1].slice(0,4), +dtm[1].slice(4,6)-1, +dtm[1].slice(6,8), +tm.slice(0,2), +tm.slice(3,5)));
          ds = dateToStr(d);
          tm = String(d.getHours()).padStart(2,'0') + ':' + String(d.getMinutes()).padStart(2,'0');
        }
        const dte = b.match(/DTEND[^:\n]*:(\d{8})(?:T(\d{4}))?/);
        const tmEnd = (dte && dte[2] && dte[1] === dtm[1] && !dtm[3]) ? dte[2].slice(0,2) + ':' + dte[2].slice(2,4) : '';
        const icsUid = get(/^UID:(.+)$/m);
        const ownId = icsUid.endsWith('@myplanner') ? icsUid.slice(0, -10) : '';
        if ((ownId && known.has('id:' + ownId)) || (icsUid && known.has('uid:' + icsUid)) || known.has('k:' + ds + '|' + tm + '|' + summary)) return;
        known.add('uid:' + icsUid);
        known.add('k:' + ds + '|' + tm + '|' + summary);
        const rrule = get(/^RRULE:(.+)$/m);
        const fm = rrule.match(/FREQ=(DAILY|WEEKLY|MONTHLY)/);
        const base = { id: uid(), time: tm, timeEnd: tmEnd, title: summary, color: EV_COLORS[0], notify: true, notifyAt: '', icsUid };
        if (fm) {
          const um = rrule.match(/UNTIL=(\d{8})/);
          const except = [...b.matchAll(/EXDATE[^:\n]*:([^\n\r]+)/g)].flatMap(m => m[1].split(',').map(v => ymd(v.trim())));
          recurring.push({ ...base, freq: fm[1].toLowerCase(), dow: strToDate(ds).getDay(), from: ds, until: um ? ymd(um[1]) : '', except });
        } else {
          events.push({ ...base, date: ds });
        }
        count++;
      });
      store.save('events', events);
      store.save('recurring', recurring);
      showToastPlain(t('ics_done')(count));
      renderAll();
    } catch (e) {
      console.error(e);
      showToastPlain(t('ics_err'));
    }
    input.value = '';
  };
  reader.readAsText(file);
}

// ---------- Navigation ----------
function showView(v) {
  document.querySelectorAll('nav button').forEach(b => b.classList.toggle('active', b.dataset.view === v));
  document.querySelectorAll('.view').forEach(x => x.classList.remove('active'));
  document.getElementById('view-' + v).classList.add('active');
  renderAll();
  window.scrollTo({ top: 0 });
}
document.querySelectorAll('nav button').forEach(btn => { btn.onclick = () => showView(btn.dataset.view); });
function goEditEvent(ds, id, rec) {
  goEvent(ds);
  editEvent(id, rec);
}
function goEvent(ds) {
  const d = strToDate(ds);
  calYear = d.getFullYear();
  calMonth = d.getMonth();
  showView('cal');
  openModal(ds);
}
function goDiary(ds) {
  const d = strToDate(ds);
  dCalYear = d.getFullYear();
  dCalMonth = d.getMonth();
  showView('diary');
  selectDiaryDay(ds);
}

// ---------- Tasks ----------
let editingTaskId = null;
let subFormTaskId = null;
function addTask() {
  const title = document.getElementById('task-title').value.trim();
  if (!title) return;
  const fields = {
    title,
    tag: document.getElementById('task-tag').value.trim(),
    due: document.getElementById('task-due').value,
    time: document.getElementById('task-time').value,
    timeEnd: document.getElementById('task-time-end').value,
    pri: document.getElementById('task-pri').value,
    notify: document.getElementById('task-notify').checked,
    notifyAt: document.getElementById('task-notify-at').value
  };
  if (editingTaskId) {
    const tk = tasks.find(t => t.id === editingTaskId);
    if (tk) Object.assign(tk, fields);
  } else {
    tasks.push({ id: uid(), ...fields, subs: [], done: false, doneAt: null });
  }
  cancelTaskEdit();
  store.save('tasks', tasks);
  renderAll();
}
function editTask(id) {
  const tk = tasks.find(t => t.id === id);
  if (!tk) return;
  showView('tasks');
  document.getElementById('task-title').value = tk.title;
  document.getElementById('task-tag').value = tk.tag || '';
  document.getElementById('task-due').value = tk.due || '';
  document.getElementById('task-time').value = tk.time || '';
  document.getElementById('task-time-end').value = tk.timeEnd || '';
  document.getElementById('task-pri').value = tk.pri || 'mid';
  document.getElementById('task-notify').checked = tk.notify !== false;
  document.getElementById('task-notify-at').value = tk.notifyAt || '';
  document.getElementById('task-more').open = !!(tk.tag || tk.time || tk.pri !== 'mid' || tk.notify === false || tk.notifyAt);
  editingTaskId = id;
  renderDueChips();
  document.getElementById('btn-task-add').textContent = t('save');
  document.getElementById('btn-task-cancel').style.display = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('task-title').focus();
}
function cancelTaskEdit() {
  editingTaskId = null;
  document.getElementById('task-title').value = '';
  document.getElementById('task-tag').value = '';
  document.getElementById('task-due').value = '';
  document.getElementById('task-time').value = '';
  document.getElementById('task-time-end').value = '';
  document.getElementById('task-notify').checked = true;
  document.getElementById('task-notify-at').value = '';
  document.getElementById('task-pri').value = 'mid';
  document.getElementById('task-more').open = false;
  renderDueChips();
  document.getElementById('btn-task-add').textContent = t('add');
  document.getElementById('btn-task-cancel').style.display = 'none';
}
function toggleTask(id) {
  const tk = tasks.find(t => t.id === id);
  if (!tk) return;
  tk.done = !tk.done;
  tk.doneAt = tk.done ? Date.now() : null;
  store.save('tasks', tasks);
  renderAll();
  if (tk.done) {
    const label = tk.title.length > 14 ? tk.title.slice(0, 14) + '…' : tk.title;
    undoFn = () => { const t2 = tasks.find(x => x.id === id); if (t2) { t2.done = false; t2.doneAt = null; store.save('tasks', tasks); } };
    showToast(t('completed')(label));
  }
}

// ---------- Due-date helpers ----------
const daysUntil = ds => Math.round((strToDate(ds) - strToDate(todayStr())) / 86400000);
const addDaysStr = n => { const d = new Date(); d.setDate(d.getDate() + n); return dateToStr(d); };
function bucketOf(tk) {
  if (!tk.due) return 'none';
  const n = daysUntil(tk.due);
  return n < 0 ? 'overdue' : n === 0 ? 'today' : n <= 3 ? 'soon' : n <= 7 ? 'week' : 'later';
}
const BUCKETS = ['overdue', 'today', 'soon', 'week', 'later', 'none'];
const sortByDue = (a, b) => ((a.due || '9999') + (a.time || '99')) < ((b.due || '9999') + (b.time || '99')) ? -1 : 1;
function bucketsHTML(list, rowFn, only) {
  return BUCKETS.filter(b => !only || only.includes(b)).map(b => {
    const items = list.filter(tk => bucketOf(tk) === b).sort(sortByDue);
    if (!items.length) return '';
    return `<div class="bucket-head ${b}">${t('b_' + b)}<span>${items.length}</span></div>` + items.map(rowFn).join('');
  }).join('');
}
// Quick due choices: today, tomorrow, this Sunday, +7 days, none.
function dueChoices() {
  const dow = new Date().getDay();
  return [['due_today', todayStr()], ['due_tomorrow', addDaysStr(1)], ['due_week', addDaysStr((7 - dow) % 7)], ['due_next', addDaysStr(7)], ['due_none', '']];
}
function dueChipsHTML(current, fn) {
  return dueChoices().map(([k, v]) => `<button type="button" class="chip-btn ${current === v ? 'on' : ''}" onclick="${fn}('${v}')">${t(k)}</button>`).join('');
}
function setTaskDue(v) { document.getElementById('task-due').value = v; renderDueChips(); }
function renderDueChips() {
  document.getElementById('task-due-chips').innerHTML = dueChipsHTML(document.getElementById('task-due').value, 'setTaskDue');
}
let quickDue = todayStr();
function setQuickDue(v) { quickDue = v; renderQuickDue(); }
function renderQuickDue() { document.getElementById('quick-due').innerHTML = dueChipsHTML(quickDue, 'setQuickDue'); }
function quickAdd() {
  const el = document.getElementById('quick-title');
  const title = el.value.trim();
  if (!title) { el.focus(); return; }
  tasks.push({ id: uid(), title, tag: '', due: quickDue, time: '', timeEnd: '', pri: 'mid', notify: true, notifyAt: '', subs: [], done: false, doneAt: null });
  store.save('tasks', tasks);
  el.value = '';
  renderAll();
}

// subtasks
function showSubForm(id) {
  subFormTaskId = subFormTaskId === id ? null : id;
  renderTasks();
  const i = document.getElementById('sub-input-' + id);
  if (i) i.focus();
}
function submitSub(id) {
  const i = document.getElementById('sub-input-' + id);
  if (!i) return;
  const title = i.value.trim();
  if (!title) return;
  const tk = tasks.find(t => t.id === id);
  if (!tk) return;
  if (!tk.subs) tk.subs = [];
  tk.subs.push({ id: uid(), title, done: false });
  store.save('tasks', tasks);
  renderTasks();
  const ni = document.getElementById('sub-input-' + id);
  if (ni) ni.focus();
}
function toggleSub(taskId, subId) {
  const tk = tasks.find(t => t.id === taskId);
  const s = tk && (tk.subs || []).find(x => x.id === subId);
  if (!s) return;
  s.done = !s.done;
  store.save('tasks', tasks);
  renderTasks();
  renderDash();
}
function delSub(taskId, subId) {
  const tk = tasks.find(t => t.id === taskId);
  if (!tk) return;
  const subs = tk.subs || [];
  const idx = subs.findIndex(x => x.id === subId);
  if (idx === -1) return;
  const [s] = subs.splice(idx, 1);
  store.save('tasks', tasks);
  renderTasks();
  offerUndo(s.title, () => {
    const t2 = tasks.find(x => x.id === taskId);
    if (!t2) return;
    (t2.subs = t2.subs || []).splice(Math.min(idx, t2.subs.length), 0, s);
    store.save('tasks', tasks);
  });
}
function subsBlockHTML(tk) {
  let html = (tk.subs || []).map(s => `<div class="sub-item ${s.done ? 'done' : ''}">
    <input type="checkbox" ${s.done ? 'checked' : ''} onchange="toggleSub('${tk.id}','${s.id}')">
    <span class="sub-title">${esc(s.title)}</span>
    <button class="small" aria-label="${t('del_label')}" onclick="delSub('${tk.id}','${s.id}')">✕</button>
  </div>`).join('');
  if (subFormTaskId === tk.id) html += `<div class="sub-form">
    <input type="text" id="sub-input-${tk.id}" placeholder="${t('sub_ph')}" onkeydown="if(event.key==='Enter')submitSub('${tk.id}')">
    <button class="primary" onclick="submitSub('${tk.id}')">${t('add')}</button>
  </div>`;
  return html;
}

// Deleting never asks first; instead a toast offers "Undo" for a few seconds.
let undoFn = null, toastTimer = null;
function offerUndo(label, restore) {
  undoFn = restore;
  showToast(t('deleted')(label.length > 14 ? label.slice(0, 14) + '…' : label));
}
function delTask(id) {
  const idx = tasks.findIndex(t => t.id === id);
  if (idx === -1) return;
  const [item] = tasks.splice(idx, 1);
  store.save('tasks', tasks);
  renderAll();
  offerUndo(item.title, () => { tasks.splice(Math.min(idx, tasks.length), 0, item); store.save('tasks', tasks); });
}
function showToast(msg) {
  document.getElementById('toast-msg').textContent = msg;
  document.querySelector('#toast button').style.display = '';
  document.getElementById('toast').classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => document.getElementById('toast').classList.remove('show'), 8000);
}
function showToastPlain(msg) {
  undoFn = null;
  document.getElementById('toast-msg').textContent = msg;
  document.querySelector('#toast button').style.display = 'none';
  document.getElementById('toast').classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => document.getElementById('toast').classList.remove('show'), 4000);
}
function undoDelete() {
  if (undoFn) undoFn();
  undoFn = null;
  document.getElementById('toast').classList.remove('show');
  renderAll();
  if (document.getElementById('modal-bg').classList.contains('open')) renderModalEvents();
}

const timeStr = tk => tk.time ? (tk.time + (tk.timeEnd ? '–' + tk.timeEnd : '')) : '';
const dueTimeStr = tk => tk.due ? fmtDate(tk.due) + (timeStr(tk) ? ' ' + timeStr(tk) : '') : timeStr(tk);
function taskRowTap(ev, id) {
  if (ev.target.closest('button') || ev.target.closest('input')) return;
  openTaskSheet(id);
}

// ---------- Task sheet (opens over the current screen) ----------
let sheetTaskId = null;
const sheetTask = () => tasks.find(x => x.id === sheetTaskId);
function openTaskSheet(id) {
  const tk = tasks.find(x => x.id === id);
  if (!tk) return;
  sheetTaskId = id;
  document.getElementById('ts-title').value = tk.title;
  document.getElementById('ts-due').value = tk.due || '';
  document.getElementById('ts-tag').value = tk.tag || '';
  document.getElementById('ts-time').value = tk.time || '';
  document.getElementById('ts-time-end').value = tk.timeEnd || '';
  document.getElementById('ts-pri').value = tk.pri || 'mid';
  document.getElementById('ts-notify').checked = tk.notify !== false;
  document.getElementById('ts-notify-at').value = tk.notifyAt || '';
  document.getElementById('ts-more').open = !!(tk.tag || tk.time || (tk.pri && tk.pri !== 'mid') || tk.notify === false || tk.notifyAt);
  document.getElementById('ts-sub-input').value = '';
  renderSheet();
  document.getElementById('task-sheet-bg').classList.add('open');
  fitSheetTitle();
}
function renderSheet() {
  const tk = sheetTask();
  if (!tk) return;
  const btn = document.getElementById('ts-done');
  btn.textContent = tk.done ? t('mark_undone') : t('mark_done');
  btn.classList.toggle('on', !!tk.done);
  renderSheetDueChips();
  document.getElementById('ts-subs').innerHTML = (tk.subs || []).map(sb => `<div class="sub-item ${sb.done ? 'done' : ''}" style="padding-left:4px;">
    <input type="checkbox" ${sb.done ? 'checked' : ''} onchange="sheetToggleSub('${sb.id}')" aria-label="${esc(sb.title)}">
    <span class="sub-title">${esc(sb.title)}</span>
    <button class="small" aria-label="${t('del_label')}" onclick="sheetDelSub('${sb.id}')">✕</button>
  </div>`).join('');
}
function fitSheetTitle() {
  const el = document.getElementById('ts-title');
  el.style.height = 'auto';
  el.style.height = el.scrollHeight + 'px';
}
document.getElementById('ts-title').addEventListener('input', fitSheetTitle);
function setSheetDue(v) { document.getElementById('ts-due').value = v; renderSheetDueChips(); }
function renderSheetDueChips() {
  document.getElementById('ts-due-chips').innerHTML = dueChipsHTML(document.getElementById('ts-due').value, 'setSheetDue');
}
function saveTaskSheet() {
  const tk = sheetTask();
  if (!tk) return closeTaskSheet();
  const title = document.getElementById('ts-title').value.trim();
  Object.assign(tk, {
    title: title || tk.title,
    due: document.getElementById('ts-due').value,
    tag: document.getElementById('ts-tag').value.trim(),
    time: document.getElementById('ts-time').value,
    timeEnd: document.getElementById('ts-time-end').value,
    pri: document.getElementById('ts-pri').value,
    notify: document.getElementById('ts-notify').checked,
    notifyAt: document.getElementById('ts-notify-at').value
  });
  store.save('tasks', tasks);
  closeTaskSheet();
  renderAll();
}
function closeTaskSheet() {
  document.getElementById('task-sheet-bg').classList.remove('open');
  sheetTaskId = null;
}
function sheetToggleDone() {
  const id = sheetTaskId;
  closeTaskSheet();
  toggleTask(id);
}
function sheetDelete() {
  const id = sheetTaskId;
  closeTaskSheet();
  delTask(id);
}
function sheetAddSub() {
  const tk = sheetTask();
  const input = document.getElementById('ts-sub-input');
  const title = input.value.trim();
  if (!tk || !title) return;
  (tk.subs = tk.subs || []).push({ id: uid(), title, done: false });
  input.value = '';
  store.save('tasks', tasks);
  renderSheet();
  renderAll();
  input.focus();
}
function sheetToggleSub(subId) {
  const tk = sheetTask();
  const sb = tk && (tk.subs || []).find(x => x.id === subId);
  if (!sb) return;
  sb.done = !sb.done;
  store.save('tasks', tasks);
  renderSheet();
  renderAll();
}
function sheetDelSub(subId) {
  const tk = sheetTask();
  if (!tk) return;
  tk.subs = (tk.subs || []).filter(x => x.id !== subId);
  store.save('tasks', tasks);
  renderSheet();
  renderAll();
}
function taskHTML(tk, dashTap) {
  const n = tk.due ? daysUntil(tk.due) : null;
  const late = tk.due && !tk.done && n < 0;
  const subs = tk.subs || [];
  const meta = [
    tk.pri === 'high' ? `<span class="badge high">${t('pri_high')}</span>` : tk.pri === 'low' ? `<span class="badge low">${t('pri_low')}</span>` : '',
    tk.tag ? `<span class="tag-chip">#${esc(tk.tag)}</span>` : '',
    subs.length ? `<span class="tag-chip">☑ ${subs.filter(s => s.done).length}/${subs.length}</span>` : '',
    tk.notify === false ? '<span class="mute-mark">🔕</span>' : (tk.notifyAt ? `<span class="mute-mark">🔔${tk.notifyAt}</span>` : '')
  ].join('');
  return `<div class="task-item ${tk.done ? 'done' : ''}" onclick="taskRowTap(event,'${tk.id}')">
    <input type="checkbox" ${tk.done ? 'checked' : ''} onchange="toggleTask('${tk.id}')" aria-label="${esc(tk.title)}">
    <div class="task-main">
      <div class="task-title">${esc(tk.title)}</div>
      ${meta ? `<div class="task-meta">${meta}</div>` : ''}
    </div>
    ${dueTimeStr(tk) ? `<div class="task-due-col ${late ? 'overdue' : ''}">
      <span class="task-due">${dueTimeStr(tk)}</span>
      ${tk.due && !tk.done ? `<span class="task-rel">${t('rel')(n)}</span>` : ''}
    </div>` : ''}
    ${!dashTap ? `<button class="small edit" aria-label="${t('sub_ph')}" onclick="showSubForm('${tk.id}')">＋</button>
    <button class="small" aria-label="${t('del_label')}" onclick="delTask('${tk.id}')">✕</button>` : ''}
  </div>`;
}
function renderTagFilter() {
  const sel = document.getElementById('task-tag-filter');
  const current = sel.value;
  const tags = [...new Set(tasks.map(t => t.tag).filter(Boolean))];
  sel.innerHTML = `<option value="">${t('all_tags')}</option>` + tags.map(tg => `<option value="${esc(tg)}">#${esc(tg)}</option>`).join('');
  if (tags.includes(current)) sel.value = current;
}
function renderTasks() {
  renderTagFilter();
  const q = (document.getElementById('task-search').value || '').toLowerCase();
  const tagF = document.getElementById('task-tag-filter').value;
  const match = tk => (!q || tk.title.toLowerCase().includes(q) || (tk.tag||'').toLowerCase().includes(q)) && (!tagF || tk.tag === tagF);
  const open = tasks.filter(t => !t.done && match(t));
  const done = tasks.filter(t => t.done && match(t)).sort((a,b) => (b.doneAt||0) - (a.doneAt||0));
  document.getElementById('task-list-open').innerHTML = open.length ? bucketsHTML(open, tk => taskHTML(tk) + subsBlockHTML(tk)) : `<div class="empty">${t('empty_open')}</div>`;
  document.getElementById('task-list-done').innerHTML = done.length ? done.map(tk => taskHTML(tk) + subsBlockHTML(tk)).join('') : `<div class="empty">${t('empty_done')}</div>`;
}

// ---------- Pomodoro (timestamp-based; catches up after the screen was closed) ----------
let pomoCfg = store.load('pomoCfg', { work: 25, brk: 5 });
let pomoMode = 'work', pomoLeft = pomoCfg.work * 60, pomoEndAt = null, pomoInterval = null;
let pomoStat = store.load('pomo', { date: todayStr(), count: 0 });
if (pomoStat.date !== todayStr()) pomoStat = { date: todayStr(), count: 0 };

function pomoSave() {
  store.saveRaw('pomoRun', { running: !!pomoInterval, mode: pomoMode, endAt: pomoEndAt, left: pomoLeft });
}
function setPomoCfg() {
  const w = Math.min(180, Math.max(1, +document.getElementById('pomo-work-min').value || 25));
  const b = Math.min(60, Math.max(1, +document.getElementById('pomo-break-min').value || 5));
  pomoCfg = { work: w, brk: b };
  store.saveRaw('pomoCfg', pomoCfg);
  document.getElementById('pomo-work-min').value = w;
  document.getElementById('pomo-break-min').value = b;
  if (!pomoInterval) { pomoMode = 'work'; pomoLeft = w * 60; pomoEndAt = null; pomoSave(); updatePomoUI(); }
}
function pomoToggle() {
  ensureAudio();
  if (pomoInterval) {
    clearInterval(pomoInterval);
    pomoInterval = null;
    pomoEndAt = null;
  } else {
    pomoEndAt = Date.now() + pomoLeft * 1000;
    pomoInterval = setInterval(pomoTick, 500);
  }
  pomoSave();
  updatePomoUI();
}
function pomoReset() {
  clearInterval(pomoInterval);
  pomoInterval = null;
  pomoEndAt = null;
  pomoMode = 'work';
  pomoLeft = pomoCfg.work * 60;
  pomoSave();
  updatePomoUI();
}
function pomoAdvance() {
  if (pomoMode === 'work') {
    pomoStat = { date: todayStr(), count: (pomoStat.date === todayStr() ? pomoStat.count : 0) + 1 };
    store.saveRaw('pomo', pomoStat);
    const hist = store.load('pomoHist', {});
    hist[todayStr()] = (hist[todayStr()] || 0) + 1;
    store.saveRaw('pomoHist', hist);
    markModified();
    pomoMode = 'break';
    pomoLeft = pomoCfg.brk * 60;
  } else {
    pomoMode = 'work';
    pomoLeft = pomoCfg.work * 60;
  }
}
function pomoCatchUp(silent) {
  if (!pomoEndAt) return;
  if (pomoEndAt - Date.now() > 0) {
    pomoLeft = Math.round((pomoEndAt - Date.now()) / 1000);
    return;
  }
  pomoAdvance();
  const nextEnd = pomoEndAt + pomoLeft * 1000;
  if (nextEnd <= Date.now()) {
    // Away longer than the next phase too: stop and wait, instead of counting sessions nobody did.
    clearInterval(pomoInterval);
    pomoInterval = null;
    pomoEndAt = null;
  } else {
    pomoEndAt = nextEnd;
    pomoLeft = Math.round((pomoEndAt - Date.now()) / 1000);
  }
  if (!silent) {
    beep();
    if ('Notification' in window && Notification.permission === 'granted')
      showNotif('🍅 ' + (pomoMode === 'work' ? t('focus') : t('brk')) + '!', { tag: 'pomo' });
  }
  pomoSave();
}
function pomoTick() {
  pomoCatchUp(false);
  updatePomoUI();
}
function pomoRestore() {
  const r = store.load('pomoRun', null);
  if (!r) return;
  pomoMode = r.mode || 'work';
  if (r.running && r.endAt) {
    pomoEndAt = r.endAt;
    pomoLeft = Math.max(0, Math.round((pomoEndAt - Date.now()) / 1000));
    pomoInterval = setInterval(pomoTick, 500);
    pomoCatchUp(true);
  } else if (typeof r.left === 'number' && r.left > 0) {
    pomoLeft = r.left;
  }
}
function updatePomoUI() {
  const mm = String(Math.floor(pomoLeft / 60)).padStart(2, '0');
  const ss = String(pomoLeft % 60).padStart(2, '0');
  document.getElementById('pomo-time').textContent = mm + ':' + ss;
  const modeEl = document.getElementById('pomo-mode');
  modeEl.textContent = pomoMode === 'work' ? t('focus') : t('brk');
  modeEl.className = 'pomo-mode' + (pomoMode === 'break' ? ' break' : '');
  document.getElementById('pomo-toggle').textContent = pomoInterval ? t('pause') : t('start');
  document.getElementById('pomo-count').textContent = t('pomo_count')(pomoStat.date === todayStr() ? pomoStat.count : 0);
  document.title = pomoInterval ? `${mm}:${ss} ${pomoMode === 'work' ? '🍅' : '☕'} My Planner` : 'My Planner';
}
document.addEventListener('visibilitychange', () => { if (!document.hidden && pomoInterval) pomoTick(); });

// ---------- Sounds ----------
let soundType = localStorage.getItem('planner_sound') || 'chime';
let audioCtx = null;
function ensureAudio() {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
  } catch {}
  return audioCtx;
}
document.addEventListener('pointerdown', ensureAudio, { once: true });
function tone(ctx, freq, startAt, dur, vol) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain); gain.connect(ctx.destination);
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(vol, ctx.currentTime + startAt);
  gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + startAt + dur);
  osc.start(ctx.currentTime + startAt);
  osc.stop(ctx.currentTime + startAt + dur);
}
function beep() {
  if (soundType === 'none') return;
  const ctx = ensureAudio();
  if (!ctx || ctx.state !== 'running') return;
  try {
    if (soundType === 'beep') {
      tone(ctx, 830, 0, .6, .25);
    } else if (soundType === 'chime') {
      tone(ctx, 660, 0, .4, .22);
      tone(ctx, 880, .18, .55, .22);
    } else {
      tone(ctx, 1318, 0, 1.1, .22);
      tone(ctx, 1976, 0, .7, .08);
    }
  } catch {}
}
function setSound(s) {
  soundType = s;
  localStorage.setItem('planner_sound', s);
  renderSoundChips();
  ensureAudio();
  beep();
}
function renderSoundChips() {
  const el = document.getElementById('sound-chips');
  if (!el) return;
  el.innerHTML = `<span class="settings-label">${t('sound_label')}</span>` +
    ['beep','chime','bell','none'].map(s => `<button class="chip-btn ${soundType === s ? 'on' : ''}" onclick="setSound('${s}')">${t('snd_' + s)}</button>`).join('');
}

// ---------- Theme ----------
let themeMode = localStorage.getItem('planner_theme') || 'auto';
const darkMq = window.matchMedia('(prefers-color-scheme: dark)');
function applyTheme() {
  const dark = themeMode === 'dark' || (themeMode === 'auto' && darkMq.matches);
  document.documentElement.classList.toggle('dark', dark);
}
darkMq.addEventListener('change', () => { if (themeMode === 'auto') applyTheme(); });
function setTheme(m) {
  themeMode = m;
  localStorage.setItem('planner_theme', m);
  applyTheme();
  renderThemeChips();
}
function renderThemeChips() {
  const el = document.getElementById('theme-chips');
  if (!el) return;
  el.innerHTML = `<span class="settings-label">${t('theme_label')}</span>` +
    ['auto','light','dark'].map(m => `<button class="chip-btn ${themeMode === m ? 'on' : ''}" onclick="setTheme('${m}')">${t('th_' + m)}</button>`).join('');
}

// ---------- Cloud Sync (Firebase) ----------
let fbConfig = store.load('fbconfig', null);
let fbUser = null, syncTimer = null, fbUnsub = null, syncSetupOpen = false, syncStatus = '';
let lastLocalMod = +localStorage.getItem('planner_lastmod') || 0;

function markModified() {
  lastLocalMod = Date.now();
  localStorage.setItem('planner_lastmod', lastLocalMod);
  scheduleSync();
}
function statusText() {
  if (syncStatus === 'ok') return '☁ ' + t('sync_ok');
  if (syncStatus === 'pending') return '☁ …';
  if (syncStatus === 'error') return '⚠ ' + t('sync_err');
  return '';
}
function setSyncStatus(s) {
  syncStatus = s;
  const el = document.getElementById('sync-status');
  if (el) el.textContent = statusText();
}
function renderSyncUI() {
  const el = document.getElementById('sync-area');
  if (!el) return;
  if (typeof firebase === 'undefined') { el.innerHTML = ''; return; }
  let html = `<span class="settings-label">${t('sync_label')}</span>`;
  if (!fbConfig) {
    html += `<button class="chip-btn ${syncSetupOpen ? 'on' : ''}" onclick="toggleSyncSetup()">${t('sync_setup')}</button>`;
    if (syncSetupOpen) {
      html += `<div class="sync-panel">
        <textarea id="fb-config-input" rows="5" placeholder="${t('sync_ph')}"></textarea>
        <div style="text-align:right; margin-top:6px;">
          <button class="primary" onclick="saveFbConfig()">${t('sync_save')}</button>
        </div>
      </div>`;
    }
  } else if (!fbUser) {
    html += `<button class="chip-btn on" onclick="fbLogin()">${t('sync_login')}</button>
      <button class="chip-btn" onclick="removeFbConfig()">${t('sync_remove')}</button>`;
  } else {
    html += `<span class="sync-mail">${esc(fbUser.email || '')}</span>
      <span class="settings-label" id="sync-status">${statusText()}</span>
      <button class="chip-btn" onclick="fbLogout()">${t('sync_logout')}</button>`;
  }
  el.innerHTML = html;
}
function toggleSyncSetup() {
  syncSetupOpen = !syncSetupOpen;
  renderSyncUI();
  if (syncSetupOpen) document.getElementById('fb-config-input').focus();
}
function saveFbConfig() {
  const txt = document.getElementById('fb-config-input').value;
  const m = txt.match(/\{[\s\S]*\}/);
  let cfg = null;
  if (m) {
    try { cfg = JSON.parse(m[0]); } catch {
      // Accept the JS object literal from the Firebase console: unquoted keys, single quotes, trailing commas.
      const json = m[0]
        .replace(/'/g, '"')
        .replace(/([{,]\s*)([A-Za-z_$][\w$]*)\s*:/g, '$1"$2":')
        .replace(/,\s*}/g, '}');
      try { cfg = JSON.parse(json); } catch {}
    }
  }
  if (!cfg || !cfg.apiKey || !cfg.projectId) { showToastPlain(t('sync_bad')); return; }
  store.saveRaw('fbconfig', cfg);
  location.reload();
}
function removeFbConfig() {
  localStorage.removeItem('planner_fbconfig');
  location.reload();
}
function initFirebase() {
  if (!fbConfig || typeof firebase === 'undefined') return;
  try {
    if (!firebase.apps.length) firebase.initializeApp(fbConfig);
    firebase.auth().onAuthStateChanged(u => {
      fbUser = u;
      renderSyncUI();
      if (u) startSync();
      else if (fbUnsub) { fbUnsub(); fbUnsub = null; }
    });
  } catch (e) { console.error(e); }
}
function fbLogin() {
  if (typeof firebase === 'undefined' || !fbConfig) return;
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).catch(() => firebase.auth().signInWithRedirect(provider));
}
function fbLogout() {
  firebase.auth().signOut();
}
function docRef() {
  return firebase.firestore().collection('planners').doc(fbUser.uid);
}
// --- merge ---
const SYNC_V = 2;
function syncState() {
  const data = {};
  DATA_KEYS.forEach(k => data[k] = store.load(k, []));
  return { data, deleted: loadTomb(), pomoHist: store.load('pomoHist', {}) };
}
function mergeTomb(a, b) {
  const out = {};
  const cutoff = Date.now() - TOMB_TTL;
  [a || {}, b || {}].forEach(src => Object.keys(src).forEach(k => {
    out[k] = out[k] || {};
    Object.entries(src[k] || {}).forEach(([id, ts]) => { if (ts >= cutoff && !(out[k][id] >= ts)) out[k][id] = ts; });
  }));
  return out;
}
function mergeList(key, local, remote, tomb) {
  const idk = ITEM_ID[key];
  const map = new Map();
  [...(local || []), ...(remote || [])].forEach(it => {
    const cur = map.get(it[idk]);
    if (!cur || (it.updatedAt || 0) > (cur.updatedAt || 0)) map.set(it[idk], it);
  });
  const gone = tomb[key] || {};
  return [...map.values()].filter(it => !(gone[it[idk]] >= (it.updatedAt || 0)));
}
function mergeState(local, remote) {
  const deleted = mergeTomb(local.deleted, remote.deleted);
  const data = {};
  DATA_KEYS.forEach(k => data[k] = mergeList(k, (local.data || {})[k], (remote.data || {})[k], deleted));
  const pomoHist = { ...(remote.pomoHist || {}) };
  Object.entries(local.pomoHist || {}).forEach(([d, n]) => { pomoHist[d] = Math.max(n, pomoHist[d] || 0); });
  return { data, deleted, pomoHist };
}
function stateSig(st) {
  const data = {};
  DATA_KEYS.forEach(k => data[k] = [...((st.data || {})[k] || [])].sort((x, y) => String(x[ITEM_ID[k]]) < String(y[ITEM_ID[k]]) ? -1 : 1));
  return stableStr({ data, deleted: st.deleted || {}, pomoHist: st.pomoHist || {} });
}
// Write a merged state into this device; returns true if anything changed.
function applyState(st) {
  if (stateSig(st) === stateSig(syncState())) return false;
  DATA_KEYS.forEach(k => store.saveRaw(k, (st.data || {})[k] || []));
  store.saveRaw('tombstones', st.deleted || {});
  store.saveRaw('pomoHist', st.pomoHist || {});
  reloadData();
  renderAll();
  return true;
}

// --- Firestore ---
function startSync() {
  docRef().get().then(snap => {
    const remote = snap.exists ? snap.data() : null;
    // First sync on this device after the per-item update: keep the old rule once
    // (newer side wins as a whole), so items deleted before the update don't come back.
    if (!localStorage.getItem('planner_sync2') && remote && (remote.updated || 0) > lastLocalMod) {
      applyState({ data: remote.data || {}, deleted: remote.deleted || {}, pomoHist: remote.pomoHist || store.load('pomoHist', {}) });
    }
    localStorage.setItem('planner_sync2', '1');
    pushNow();
    if (fbUnsub) fbUnsub();
    fbUnsub = docRef().onSnapshot(s => {
      const r = s.exists ? s.data() : null;
      if (!r || r.v !== SYNC_V) return;
      const merged = mergeState(syncState(), r);
      applyState(merged);
      if (stateSig(merged) !== stateSig(r)) scheduleSync();
      else if (!syncTimer) setSyncStatus('ok');
    }, () => setSyncStatus('error'));
  }).catch(() => setSyncStatus('error'));
}
function scheduleSync() {
  if (!fbUser) return;
  setSyncStatus('pending');
  clearTimeout(syncTimer);
  syncTimer = setTimeout(pushNow, 1500);
}
// Read the cloud copy, merge it with this device, and write the result back in one transaction.
async function pushNow() {
  clearTimeout(syncTimer);
  syncTimer = null;
  if (!fbUser) return;
  try {
    const ref = docRef();
    const merged = await firebase.firestore().runTransaction(async tx => {
      const snap = await tx.get(ref);
      const remote = snap.exists ? snap.data() : null;
      const m = remote && remote.v === SYNC_V ? mergeState(syncState(), remote) : syncState();
      tx.set(ref, { v: SYNC_V, ...m, updated: Date.now() });
      return m;
    });
    applyState(merged);
    setSyncStatus('ok');
  } catch (e) {
    console.error(e);
    setSyncStatus(navigator.onLine ? 'error' : 'pending'); // offline: retried when back online
  }
}
window.addEventListener('online', () => { if (fbUser) pushNow(); });

// ---------- Events (incl. recurring) ----------
const EV_COLORS = ['#8c6d4f', '#b3543f', '#b7791f', '#5f7a4e', '#4e7d78', '#4a6785', '#7d5a7a', '#b06a76'];
let selectedEvColor = EV_COLORS[0];
function renderColorSwatches() {
  document.getElementById('event-colors').innerHTML = EV_COLORS.map(c =>
    `<button class="color-sw ${selectedEvColor === c ? 'sel' : ''}" style="background:${c}" onclick="pickEvColor('${c}')"></button>`).join('');
}
function pickEvColor(c) { selectedEvColor = c; renderColorSwatches(); }

// Recurring rule: { freq: 'daily'|'weekly'|'monthly' (missing = weekly), from, until?, except?: [dates], dow }
function recOccurs(r, ds) {
  if (ds < r.from || (r.until && ds > r.until) || (r.except || []).includes(ds)) return false;
  const freq = r.freq || 'weekly';
  if (freq === 'daily') return true;
  if (freq === 'monthly') return strToDate(ds).getDate() === strToDate(r.from).getDate();
  return strToDate(ds).getDay() === r.dow;
}
function eventsOn(ds) {
  const rec = recurring
    .filter(r => recOccurs(r, ds))
    .map(r => ({ id: r.id, date: ds, time: r.time, timeEnd: r.timeEnd, title: r.title, color: r.color, notify: r.notify, notifyAt: r.notifyAt, rec: true }));
  return [...events.filter(e => e.date === ds), ...rec];
}

// ---------- Calendar ----------
let calYear, calMonth;
{ const n = new Date(); calYear = n.getFullYear(); calMonth = n.getMonth(); }
let modalDate = null;
let editingEventId = null, editingEventRec = false;

function calMove(d) {
  calMonth += d;
  if (calMonth < 0) { calMonth = 11; calYear--; }
  if (calMonth > 11) { calMonth = 0; calYear++; }
  renderCal();
}
function calToday() {
  const n = new Date();
  calYear = n.getFullYear();
  calMonth = n.getMonth();
  renderCal();
}
function calGridHTML(year, month, cellFn) {
  let html = t('dows').map(d => `<div class="cal-dow">${d}</div>`).join('');
  const first = new Date(year, month, 1);
  const start = new Date(first);
  start.setDate(1 - first.getDay());
  for (let i = 0; i < 42; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    html += cellFn(d, dateToStr(d), d.getMonth() !== month);
  }
  return html;
}
const phoneMq = window.matchMedia('(max-width: 640px)');
phoneMq.addEventListener('change', () => renderCal());
function renderCal() {
  document.getElementById('cal-title').textContent = t('calTitle')(calYear, calMonth);
  const today = todayStr();
  const maxEv = phoneMq.matches ? 2 : 3; // how many event names fit in a day cell
  document.getElementById('cal-grid').innerHTML = calGridHTML(calYear, calMonth, (d, ds, other) => {
    const dayEvents = eventsOn(ds).sort((a,b) => (a.time||'') < (b.time||'') ? -1 : 1);
    const dayTasks = tasks.filter(t => t.due === ds && !t.done);
    return `<div class="cal-cell ${other ? 'other' : ''} ${ds === today ? 'today' : ''}" onclick="openModal('${ds}')">
      <span class="daynum">${d.getDate()}</span>
      ${dayEvents.slice(0, maxEv).map(e => `<div class="ev-label${e.rec ? ' rec' : ''}" style="--ev:${e.color || EV_COLORS[0]}">${e.time ? `<span class="ev-time">${e.time}</span>` : ''}${esc(e.title)}</div>`).join('')}
      ${dayEvents.length > maxEv ? `<div class="ev-more">+${dayEvents.length - maxEv}</div>` : ''}
      ${dayTasks.length ? `<div class="cal-task-dot">📌${dayTasks.length}</div>` : ''}
    </div>`;
  });
}
function openModal(ds) {
  modalDate = ds;
  document.getElementById('modal-date').textContent = fmtDateFull(ds);
  cancelEventEdit();
  renderModalEvents();
  document.getElementById('modal-bg').classList.add('open');
}
function renderModalEvents() {
  const list = eventsOn(modalDate).sort((a,b) => (a.time||'') < (b.time||'') ? -1 : 1);
  const dayTasks = tasks.filter(t => t.due === modalDate);
  let html = list.map(e => `<div class="modal-event-item" onclick="modalEvTap(event, '${e.id}', ${!!e.rec})">
      <span class="ev-dot inline" style="background:${e.color || EV_COLORS[0]}"></span>
      <span style="flex:1">${e.rec ? '🔁 ' : ''}${timeStr(e) ? '🕐 ' + timeStr(e) + ' ' : ''}${esc(e.title)}${e.notify === false ? ' 🔕' : (e.notifyAt ? ' 🔔' + e.notifyAt : '')}</span>
      ${e.rec
        ? `<span class="rec-del">
             <button class="small" onclick="delRecurringOne('${e.id}','${modalDate}')">✕ ${t('del_one')}</button>
             <button class="small" onclick="delRecurringAfter('${e.id}','${modalDate}')">✕ ${t('del_after')}</button>
           </span>`
        : `<button class="small" aria-label="${t('del_label')}" onclick="delEvent('${e.id}')">✕</button>`}
    </div>`).join('');
  html += dayTasks.map(tk => `<div class="modal-event-item" onclick="modalTaskTap(event, '${tk.id}')"><span style="flex:1">📌 ${timeStr(tk) ? timeStr(tk) + ' ' : ''}${esc(tk.title)}${tk.done ? ' ' + t('done_suffix') : ''}</span></div>`).join('');
  document.getElementById('modal-events').innerHTML = html || `<div class="empty">${t('no_events_day')}</div>`;
}
function addEvent() {
  const title = document.getElementById('event-title').value.trim();
  if (!title || !modalDate) return;
  const time = document.getElementById('event-time').value;
  const timeEnd = document.getElementById('event-time-end').value;
  const notify = document.getElementById('event-notify').checked;
  const notifyAt = document.getElementById('event-notify-at').value;

  if (editingEventId) {
    const list = editingEventRec ? recurring : events;
    const e = list.find(x => x.id === editingEventId);
    if (e) Object.assign(e, { title, time, timeEnd, notify, notifyAt, color: selectedEvColor });
    if (e && editingEventRec) {
      e.freq = document.getElementById('event-repeat').value || e.freq || 'weekly';
      e.until = document.getElementById('event-until').value || '';
    }
    store.save(editingEventRec ? 'recurring' : 'events', list);
  } else if (document.getElementById('event-repeat').value) {
    recurring.push({ id: uid(), freq: document.getElementById('event-repeat').value, dow: strToDate(modalDate).getDay(), time, timeEnd, title, color: selectedEvColor, notify, notifyAt, from: modalDate, until: document.getElementById('event-until').value || '', except: [] });
    store.save('recurring', recurring);
  } else {
    events.push({ id: uid(), date: modalDate, time, timeEnd, title, color: selectedEvColor, notify, notifyAt });
    store.save('events', events);
  }
  cancelEventEdit();
  renderModalEvents();
  renderCal();
}
function modalEvTap(ev, id, rec) {
  if (ev.target.closest('button')) return;
  editEvent(id, rec);
}
function modalTaskTap(ev, id) {
  if (ev.target.closest('button')) return;
  closeModal();
  openTaskSheet(id);
}
function editEvent(id, rec) {
  const list = rec ? recurring : events;
  const e = list.find(x => x.id === id);
  if (!e) return;
  document.getElementById('event-title').value = e.title;
  document.getElementById('event-time').value = e.time || '';
  document.getElementById('event-time-end').value = e.timeEnd || '';
  document.getElementById('event-notify').checked = e.notify !== false;
  document.getElementById('event-notify-at').value = e.notifyAt || '';
  selectedEvColor = e.color || EV_COLORS[0];
  renderColorSwatches();
  editingEventId = id;
  editingEventRec = rec;
  // A single event can't become recurring here (and vice versa); recurring ones can change frequency / end date.
  document.getElementById('row-repeat').style.display = rec ? '' : 'none';
  if (rec) {
    document.getElementById('event-repeat').value = e.freq || 'weekly';
    document.getElementById('event-until').value = e.until || '';
  }
  updateRepeatUI();
  document.getElementById('btn-event-add').textContent = t('save');
  document.getElementById('btn-event-cancel').style.display = '';
  document.getElementById('event-title').focus();
}
function cancelEventEdit() {
  editingEventId = null;
  editingEventRec = false;
  document.getElementById('event-title').value = '';
  document.getElementById('event-time').value = '';
  document.getElementById('event-time-end').value = '';
  document.getElementById('event-repeat').value = '';
  document.getElementById('event-until').value = '';
  document.getElementById('event-notify').checked = true;
  document.getElementById('event-notify-at').value = '';
  document.getElementById('row-repeat').style.display = '';
  updateRepeatUI();
  selectedEvColor = EV_COLORS[0];
  renderColorSwatches();
  document.getElementById('btn-event-add').textContent = t('add_event');
  document.getElementById('btn-event-cancel').style.display = 'none';
}
function updateRepeatUI() {
  const on = !!document.getElementById('event-repeat').value;
  document.getElementById('row-until').style.display = on ? '' : 'none';
  // The repeat dropdown's first option is "No repeat"; while editing a recurring event it isn't a valid choice.
  document.getElementById('event-repeat').options[0].disabled = editingEventRec;
}
function afterEventDelete() {
  if (editingEventId) cancelEventEdit();
  renderModalEvents();
  renderCal();
}
function delEvent(id) {
  const idx = events.findIndex(x => x.id === id);
  if (idx === -1) return;
  const [e] = events.splice(idx, 1);
  store.save('events', events);
  afterEventDelete();
  offerUndo(e.title, () => { events.splice(Math.min(idx, events.length), 0, e); store.save('events', events); });
}
function delRecurringOne(id, ds) {
  const r = recurring.find(x => x.id === id);
  if (!r) return;
  r.except = [...(r.except || []), ds];
  store.save('recurring', recurring);
  afterEventDelete();
  offerUndo(r.title, () => {
    const r2 = recurring.find(x => x.id === id);
    if (r2) { r2.except = (r2.except || []).filter(d => d !== ds); store.save('recurring', recurring); }
  });
}
function delRecurringAfter(id, ds) {
  const idx = recurring.findIndex(x => x.id === id);
  if (idx === -1) return;
  const r = recurring[idx];
  const prevUntil = r.until || '';
  if (ds <= r.from) {
    // Deleting from the first occurrence on = delete the whole series.
    recurring.splice(idx, 1);
    store.save('recurring', recurring);
    afterEventDelete();
    offerUndo(r.title, () => { recurring.splice(Math.min(idx, recurring.length), 0, r); store.save('recurring', recurring); });
    return;
  }
  const d = strToDate(ds);
  d.setDate(d.getDate() - 1);
  r.until = dateToStr(d);
  store.save('recurring', recurring);
  afterEventDelete();
  offerUndo(r.title, () => {
    const r2 = recurring.find(x => x.id === id);
    if (r2) { r2.until = prevUntil; store.save('recurring', recurring); }
  });
}
function closeModal() {
  document.getElementById('modal-bg').classList.remove('open');
  cancelEventEdit();
  renderAll();
}

// ---------- Progress ----------
let addingChildId = null;
function addProj() {
  const name = document.getElementById('proj-name').value.trim();
  if (!name) return;
  projects.push({ id: uid(), name, pct: 0, children: [] });
  document.getElementById('proj-name').value = '';
  store.save('projects', projects);
  renderProj();
}
function findProj(id, list = projects) {
  for (const p of list) {
    if (p.id === id) return p;
    const f = findProj(id, p.children || []);
    if (f) return f;
  }
  return null;
}
function removeProj(id, list = projects) {
  const i = list.findIndex(p => p.id === id);
  if (i !== -1) { list.splice(i, 1); return true; }
  return list.some(p => removeProj(id, p.children || []));
}
function showChildForm(id) {
  addingChildId = addingChildId === id ? null : id;
  renderProj();
  if (addingChildId) {
    const input = document.getElementById('child-input-' + id);
    if (input) input.focus();
  }
}
function submitChild(id) {
  const input = document.getElementById('child-input-' + id);
  if (!input) return;
  const name = input.value.trim();
  if (!name) return;
  const p = findProj(id);
  if (!p) return;
  p.children.push({ id: uid(), name, pct: 0, children: [] });
  addingChildId = null;
  store.save('projects', projects);
  renderProj();
}
function setPct(id, pct) {
  const p = findProj(id);
  if (p) p.pct = +pct;
  store.save('projects', projects);
  renderProj();
}
function findProjParent(id, list = projects, parentId = null) {
  const i = list.findIndex(p => p.id === id);
  if (i !== -1) return { parentId, index: i };
  for (const p of list) {
    const f = findProjParent(id, p.children || [], p.id);
    if (f) return f;
  }
  return null;
}
function delProj(id) {
  const p = findProj(id);
  const pos = findProjParent(id);
  if (!p || !pos) return;
  removeProj(id);
  store.save('projects', projects);
  renderProj();
  offerUndo(p.name, () => {
    const list = pos.parentId ? (findProj(pos.parentId) || {}).children : projects;
    if (!list) return;
    list.splice(Math.min(pos.index, list.length), 0, p);
    store.save('projects', projects);
  });
}
function projHTML(p, level) {
  let html = `<div class="proj-item lv${level}">
    <div class="proj-top">
      <span class="lv-tag">${t('lv')[level]}</span>
      <span class="proj-name">${p.pct >= 100 ? '✅ ' : ''}${esc(p.name)}</span>
      <span class="proj-pct">${p.pct}%</span>
      ${level < 2 ? `<button class="add-goal-btn" onclick="showChildForm('${p.id}')">${t('add_lv')[level]}</button>` : ''}
      <button class="small" aria-label="${t('del_label')}" onclick="delProj('${p.id}')">✕</button>
    </div>
    <div class="bar-bg"><div class="bar-fill" style="width:${p.pct}%"></div></div>
    <div class="proj-controls"><input type="range" min="0" max="100" step="5" value="${p.pct}" oninput="setPct('${p.id}', this.value)"></div>
    ${addingChildId === p.id ? `<div class="child-form">
      <input type="text" id="child-input-${p.id}" placeholder="${t('goal_name_ph')}" onkeydown="if(event.key==='Enter')submitChild('${p.id}')">
      <button class="primary" onclick="submitChild('${p.id}')">${t('add')}</button>
    </div>` : ''}
  </div>`;
  if (p.children && p.children.length) html += p.children.map(c => projHTML(c, level + 1)).join('');
  return html;
}
function renderProj() {
  document.getElementById('proj-list').innerHTML = projects.length
    ? projects.map(p => projHTML(p, 0)).join('')
    : `<div class="empty">${t('empty_goals')}</div>`;
}

// ---------- Habits ----------
let habitOffset = 0;
function habitMove(d) {
  habitOffset = d === 0 ? 0 : Math.max(0, habitOffset + d);
  renderHabits();
}
function addHabit() {
  const name = document.getElementById('habit-name').value.trim();
  if (!name) return;
  habits.push({ id: uid(), name, dates: [], remind: document.getElementById('habit-remind').value });
  document.getElementById('habit-name').value = '';
  document.getElementById('habit-remind').value = '';
  store.save('habits', habits);
  renderHabits();
}
function setHabitRemind(id, time) {
  const h = habits.find(h => h.id === id);
  if (!h) return;
  h.remind = time;
  store.save('habits', habits);
}
function delHabit(id) {
  const idx = habits.findIndex(x => x.id === id);
  if (idx === -1) return;
  const [h] = habits.splice(idx, 1);
  store.save('habits', habits);
  renderHabits();
  offerUndo(h.name, () => { habits.splice(Math.min(idx, habits.length), 0, h); store.save('habits', habits); });
}
function toggleHabitDay(id, ds) {
  const h = habits.find(h => h.id === id);
  if (!h) return;
  const i = h.dates.indexOf(ds);
  if (i === -1) h.dates.push(ds); else h.dates.splice(i, 1);
  store.save('habits', habits);
  renderHabits();
  renderDash();
}
function habitRowTap(ev, id) {
  if (ev.target.closest('button') || ev.target.closest('input')) return;
  toggleHabitDay(id, todayStr());
}
function habitStreak(h) {
  const set = new Set(h.dates);
  let streak = 0;
  const d = new Date();
  if (!set.has(dateToStr(d))) d.setDate(d.getDate() - 1);
  while (set.has(dateToStr(d))) {
    streak++;
    d.setDate(d.getDate() - 1);
  }
  return streak;
}
function lastNDays(n) {
  return lastNDaysFrom(n, 0);
}
function lastNDaysFrom(n, endOffsetDays) {
  const arr = [];
  const d = new Date();
  d.setDate(d.getDate() - endOffsetDays - (n - 1));
  for (let i = 0; i < n; i++) {
    arr.push(dateToStr(d));
    d.setDate(d.getDate() + 1);
  }
  return arr;
}
function renderHabits() {
  const days = lastNDaysFrom(7, habitOffset * 7);
  const today = todayStr();
  const label = document.getElementById('habit-range-label');
  if (label) label.textContent = `${fmtDate(days[0])} – ${fmtDate(days[6])}`;
  document.getElementById('habit-list').innerHTML = habits.length ? habits.map(h => {
    const streak = habitStreak(h);
    return `<div class="habit-item" onclick="habitRowTap(event, '${h.id}')">
      <span class="habit-name">${h.dates.includes(today) ? '✅ ' : ''}${esc(h.name)}</span>
      <span class="habit-days">${days.map(ds => {
        const dt = strToDate(ds);
        return `<button class="habit-day ${h.dates.includes(ds) ? 'on' : ''} ${ds === today ? 'today-ring' : ''}" onclick="toggleHabitDay('${h.id}','${ds}')" title="${ds}">
          <span>${dt.getDate()}</span>
        </button>`;
      }).join('')}</span>
      <span class="streak">🔥 ${streak}${lang === 'ja' ? t('streak') : ' ' + (streak === 1 ? 'day' : 'days')}</span>
      <span class="time-range" title="${t('remind_title')}"><span>⏰</span><input type="time" value="${h.remind || ''}" onchange="setHabitRemind('${h.id}', this.value)" style="font-size:12px; padding:4px 6px;"></span>
      <button class="small" aria-label="${t('del_label')}" onclick="delHabit('${h.id}')">✕</button>
    </div>`;
  }).join('') : `<div class="empty">${t('empty_habits')}</div>`;
}

// ---------- Diary ----------
const MOODS = ['😊','😐','😞','🔥','😴','❤️','🎉','😭','💪','😡'];
let selectedMood = MOODS[0];
function renderMoodPicker() {
  document.getElementById('mood-picker').innerHTML = MOODS.map(m =>
    `<button class="${m === selectedMood ? 'sel' : ''}" onclick="pickMood('${m}')">${m}</button>`).join('');
}
function pickMood(m) { selectedMood = m; renderMoodPicker(); if (diary.some(d => d.date === selectedDiaryDate)) diaryDirty = true; }

// The editor sits under the calendar and always shows the selected day:
// tap a day -> its entry (or an empty page) opens right there for writing or editing.
let dCalYear, dCalMonth, selectedDiaryDate = todayStr(), diaryDirty = false;
{ const n = new Date(); dCalYear = n.getFullYear(); dCalMonth = n.getMonth(); }
function loadDiaryEditor() {
  const entry = diary.find(d => d.date === selectedDiaryDate);
  document.getElementById('diary-text').value = entry ? entry.text : '';
  selectedMood = entry ? entry.mood : MOODS[0];
  renderMoodPicker();
  diaryDirty = false;
  document.getElementById('diary-saved').textContent = '';
}
function saveDiary() {
  const date = selectedDiaryDate || todayStr();
  const text = document.getElementById('diary-text').value.trim();
  const existing = diary.find(d => d.date === date);
  if (!text) { if (existing) delDiary(date); return; }
  if (existing) { existing.text = text; existing.mood = selectedMood; }
  else diary.push({ date, mood: selectedMood, text });
  store.save('diary', diary);
  diaryDirty = false;
  renderDiary();
  document.getElementById('diary-saved').textContent = t('diary_saved');
}
function delDiary(date) {
  const idx = diary.findIndex(d => d.date === date);
  if (idx === -1) return;
  const [entry] = diary.splice(idx, 1);
  store.save('diary', diary);
  if (date === selectedDiaryDate) loadDiaryEditor();
  renderDiary();
  offerUndo(fmtDateFull(date), () => {
    if (diary.some(d => d.date === date)) return;
    diary.splice(Math.min(idx, diary.length), 0, entry);
    store.save('diary', diary);
    if (date === selectedDiaryDate) loadDiaryEditor();
  });
}
function dCalMove(d) {
  dCalMonth += d;
  if (dCalMonth < 0) { dCalMonth = 11; dCalYear--; }
  if (dCalMonth > 11) { dCalMonth = 0; dCalYear++; }
  renderDiary();
}
function dCalToday() {
  const n = new Date();
  dCalYear = n.getFullYear();
  dCalMonth = n.getMonth();
  selectDiaryDay(todayStr());
}
function selectDiaryDay(ds) {
  if (diaryDirty && ds !== selectedDiaryDate) saveDiary(); // don't lose what was being typed
  selectedDiaryDate = ds;
  const d = strToDate(ds);
  dCalYear = d.getFullYear();
  dCalMonth = d.getMonth();
  loadDiaryEditor();
  renderDiary();
  const ed = document.getElementById('diary-editor');
  if (ed && document.getElementById('view-diary').classList.contains('active')) ed.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
function renderDiary() {
  document.getElementById('dcal-title').textContent = t('calTitle')(dCalYear, dCalMonth);
  const today = todayStr();
  document.getElementById('dcal-grid').innerHTML = calGridHTML(dCalYear, dCalMonth, (d, ds, other) => {
    const entry = diary.find(e => e.date === ds);
    return `<div class="cal-cell diary-cal-cell ${other ? 'other' : ''} ${ds === today ? 'today' : ''} ${entry ? 'has-entry' : ''} ${ds === selectedDiaryDate ? 'selected' : ''}" onclick="selectDiaryDay('${ds}')">
      <span class="daynum">${d.getDate()}</span>
      ${entry ? `<div class="mood-big">${entry.mood}</div>` : ''}
    </div>`;
  });
  document.getElementById('diary-editor-title').textContent = t('diary_for')(fmtDateFull(selectedDiaryDate));
  document.getElementById('btn-diary-del').style.visibility = diary.some(d => d.date === selectedDiaryDate) ? '' : 'hidden';
  if (!diaryDirty) loadDiaryEditor(); // e.g. the entry changed on another device
}
document.getElementById('diary-text').addEventListener('input', () => {
  diaryDirty = true;
  document.getElementById('diary-saved').textContent = '';
});

// ---------- Stats ----------
let statsHabitRange = 7, statsHabitOffset = 0;
function setStatsHabitRange(n) {
  statsHabitRange = n;
  statsHabitOffset = 0;
  renderStats();
}
function stHabitMove(d) {
  statsHabitOffset = Math.max(0, statsHabitOffset + d);
  renderStats();
}
function barsHTML(days, counts) {
  const max = Math.max(...counts, 1);
  return days.map((ds, i) => {
    const dt = strToDate(ds);
    return `<div class="chart-col">
      <span class="chart-num">${counts[i] || ''}</span>
      <div class="chart-bar" style="height:${(counts[i] / max) * 100}%"></div>
      <span class="chart-label">${t('dows')[dt.getDay()]}</span>
    </div>`;
  }).join('');
}
function renderStats() {
  const el = document.getElementById('st-done');
  if (!el) return;
  const days = lastNDays(7);

  const doneCounts = days.map(ds => tasks.filter(tk => tk.done && tk.doneAt && dateToStr(new Date(tk.doneAt)) === ds).length);
  el.innerHTML = barsHTML(days, doneCounts);

  const hist = store.load('pomoHist', {});
  const pomoCounts = days.map(ds => hist[ds] || 0);
  document.getElementById('st-pomo').innerHTML = barsHTML(days, pomoCounts);
  document.getElementById('st-pomo-total').textContent = pomoCounts.reduce((a, b) => a + b, 0);

  const weekTasks = tasks.filter(tk => tk.due && days.includes(tk.due));
  document.getElementById('st-rate').textContent = weekTasks.length
    ? Math.round(weekTasks.filter(tk => tk.done).length / weekTasks.length * 100) + '%'
    : '–';

  const open = tasks.filter(tk => !tk.done);
  const total = Math.max(open.length, 1);
  document.getElementById('st-pri').innerHTML = ['high','mid','low'].map(p => {
    const n = open.filter(tk => tk.pri === p).length;
    return `<div class="stat-row">
      <span class="badge ${p}" style="flex:0 0 52px; text-align:center;">${t('pri_' + p)}</span>
      <div class="bar-bg" style="flex:1; height:10px;"><div class="bar-fill" style="width:${(n / total) * 100}%"></div></div>
      <span class="stat-row-num">${n}</span>
    </div>`;
  }).join('');

  document.getElementById('st-mood').innerHTML = days.map(ds => {
    const entry = diary.find(d => d.date === ds);
    const dt = strToDate(ds);
    return `<div class="mood-week-day" onclick="goDiary('${ds}')"><div class="emo">${entry ? entry.mood : '·'}</div><div class="lbl">${t('dows')[dt.getDay()]}</div></div>`;
  }).join('');

  document.getElementById('st-habit-range').innerHTML =
    `<button class="chip-btn" onclick="stHabitMove(1)">←</button>
     <button class="chip-btn" onclick="stHabitMove(-1)">→</button>` +
    [7, 30].map(n =>
      `<button class="chip-btn ${statsHabitRange === n ? 'on' : ''}" onclick="setStatsHabitRange(${n})">${t(n === 7 ? 'range_week' : 'range_month')}</button>`).join('');
  const hdays = lastNDaysFrom(statsHabitRange, statsHabitOffset * statsHabitRange);
  const hlabel = document.getElementById('st-habit-label');
  if (hlabel) hlabel.textContent = `${fmtDate(hdays[0])} – ${fmtDate(hdays[hdays.length - 1])}`;
  document.getElementById('st-habits').innerHTML = habits.length ? habits.map(h => {
    const n = hdays.filter(ds => h.dates.includes(ds)).length;
    return `<div class="stat-row">
      <span style="flex:1; font-size:13px; font-weight:600;">${esc(h.name)}</span>
      <div class="bar-bg" style="flex:2; height:9px;"><div class="bar-fill" style="width:${(n / statsHabitRange) * 100}%"></div></div>
      <span class="stat-row-num">${n}/${statsHabitRange}</span>
    </div>`;
  }).join('') : `<div class="empty">${t('empty_habits')}</div>`;
}

// ---------- Dashboard ----------
let showLater = false;
function toggleLater() {
  showLater = !showLater;
  document.getElementById('dash-events-later').style.display = showLater ? 'block' : 'none';
  document.getElementById('btn-later').textContent = showLater ? t('hide_later') : t('show_later');
}
function eventItemHTML(e) {
  return `<div class="task-item" onclick="goEvent('${e.date}')"><span class="ev-dot inline" style="background:${e.color || EV_COLORS[0]}"></span><span class="task-title">${e.rec ? '🔁 ' : ''}${timeStr(e) ? '🕐 ' + timeStr(e) + ' ' : ''}${esc(e.title)}</span></div>`;
}
const nowHM = () => { const n = new Date(); return String(n.getHours()).padStart(2, '0') + ':' + String(n.getMinutes()).padStart(2, '0'); };
// "What to do next": past-due task, an event starting within the hour, today's task,
// then the next event today, then the nearest deadline.
function heroPick() {
  const today = todayStr(), hm = nowHM();
  const open = tasks.filter(tk => !tk.done).sort(sortByDue);
  const overdue = open.filter(tk => tk.due && tk.due < today);
  const dueToday = open.filter(tk => tk.due === today);
  const evs = eventsOn(today).filter(e => e.time && (e.timeEnd || e.time) >= hm).sort((a, b) => a.time < b.time ? -1 : 1);
  const soonEv = evs.find(e => {
    const [H, M] = e.time.split(':').map(Number);
    const mins = H * 60 + M - (new Date().getHours() * 60 + new Date().getMinutes());
    return mins <= 60;
  });
  if (overdue.length) return { kind: 'overdue', task: overdue[0], more: 0 };
  const nextTask = dueToday[0] || open.find(tk => tk.due) || null;
  if (soonEv) return { kind: 'event', ev: soonEv, then: nextTask };
  if (dueToday.length) return { kind: 'today', task: dueToday[0], more: dueToday.length - 1 };
  if (evs.length) return { kind: 'event', ev: evs[0], then: nextTask };
  const next = open.find(tk => tk.due);
  return next ? { kind: 'next', task: next, none: true } : { kind: 'none' };
}
function renderHero() {
  const h = heroPick();
  const el = document.getElementById('dash-hero');
  if (h.task) {
    const tk = h.task;
    const meta = [tk.tag ? '#' + esc(tk.tag) : '', dueTimeStr(tk), t('rel')(daysUntil(tk.due))].filter(Boolean).join(' · ');
    el.className = 'hero ' + (h.kind === 'next' ? 'calm' : h.kind);
    el.innerHTML = `${h.none ? `<div class="hero-none">${t('hero_none')}</div>` : ''}
      <div class="hero-label">${t('hero_' + h.kind)}</div>
      <div class="hero-title">${esc(tk.title)}</div>
      <div class="hero-meta">${meta}</div>
      <div class="hero-actions">
        <button class="hero-btn" onclick="toggleTask('${tk.id}')">✓ ${t('hero_done')}</button>
        <button class="hero-link" onclick="openTaskSheet('${tk.id}')">${t('edit')}</button>
      </div>
      ${h.more ? `<div class="hero-more">${t('hero_more')(h.more)}</div>` : ''}`;
  } else if (h.ev) {
    const e = h.ev;
    const [H, M] = e.time.split(':').map(Number);
    const now = new Date();
    const mins = H * 60 + M - (now.getHours() * 60 + now.getMinutes());
    const when = mins <= 0 ? t('hero_now') : t('hero_in')(mins);
    const tk = h.then;
    el.className = 'hero event';
    el.innerHTML = `<div class="hero-label">${t('hero_event')} · ${when}</div>
      <div class="hero-title">${e.rec ? '🔁 ' : ''}${esc(e.title)}</div>
      <div class="hero-meta">🕐 ${timeStr(e)}${e.notify === false ? ' · 🔕' : ''}</div>
      <div class="hero-actions"><button class="hero-btn" onclick="goEditEvent('${e.date}','${e.id}',${!!e.rec})">${t('hero_edit')}</button></div>
      ${tk ? `<div class="hero-then">
        <span class="hero-then-label">${t('hero_then')}</span>
        <span class="hero-then-title">${esc(tk.title)}</span>
        <span class="hero-then-due">${t('rel')(daysUntil(tk.due))}</span>
        <button class="hero-then-btn" onclick="toggleTask('${tk.id}')" aria-label="${t('hero_done')}">✓</button>
      </div>` : ''}`;
  } else {
    el.className = 'hero calm';
    el.innerHTML = `<div class="hero-title">${t('hero_none')}</div><div class="hero-meta">${t('hero_none_sub')}</div>`;
  }
}
function renderDashHabits() {
  const card = document.getElementById('dash-habits-card');
  card.style.display = habits.length ? '' : 'none';
  const today = todayStr();
  document.getElementById('dash-habits').innerHTML = habits.map(h => {
    const on = h.dates.includes(today);
    const st = habitStreak(h);
    return `<button class="habit-chip ${on ? 'on' : ''}" aria-pressed="${on}" onclick="toggleHabitDay('${h.id}','${today}')">
      <span class="hc-check">${on ? '✓' : ''}</span><span class="hc-name">${esc(h.name)}</span>${st ? `<span class="hc-streak">🔥${st}</span>` : ''}
    </button>`;
  }).join('');
}
function renderDash() {
  const today = todayStr();
  const week = new Date();
  week.setDate(week.getDate() + 7);
  const weekStr = dateToStr(week);

  const open = tasks.filter(t => !t.done);
  document.getElementById('dash-date').textContent = t('dateHead')(today);
  document.getElementById('dash-sum').textContent = t('sum')(open.length, eventsOn(today).length);
  renderHero();
  renderQuickDue();
  renderDashHabits();

  // Tasks due within a week, grouped; later / undated ones are just counted.
  const near = ['overdue', 'today', 'soon', 'week'];
  const nearHTML = bucketsHTML(open, tk => taskHTML(tk, true), near);
  const nLater = open.filter(tk => bucketOf(tk) === 'later').length;
  const undated = open.filter(tk => bucketOf(tk) === 'none');
  const undatedHTML = undated.length ? `<div class="bucket-head none">${t('b_none')}<span>${undated.length}</span></div>` + undated.slice(0, 3).map(tk => taskHTML(tk, true)).join('') : '';
  const nNone = Math.max(0, undated.length - 3);
  document.getElementById('dash-buckets').innerHTML =
    ((nearHTML + undatedHTML) || `<div class="empty">${t('empty_open')}</div>`) +
    `<div class="more-link"><button class="ghost" onclick="showView('tasks')">${(nLater || nNone) ? t('more_tasks')(nLater, nNone) : t('all_tasks')}</button></div>`;

  let weekHTML = '';
  const d = new Date();
  for (let i = 0; i <= 7; i++) {
    const ds = dateToStr(d);
    const dayEvents = eventsOn(ds).sort((a,b) => (a.time||'') < (b.time||'') ? -1 : 1);
    if (dayEvents.length) {
      weekHTML += `<div class="event-date-head">${ds === today ? t('today_word') + ' · ' : ''}${fmtDate(ds)}</div>`;
      weekHTML += dayEvents.map(eventItemHTML).join('');
    }
    d.setDate(d.getDate() + 1);
  }
  document.getElementById('dash-events').innerHTML = weekHTML || `<div class="empty">${t('empty_events_week')}</div>`;

  const laterEvents = events.filter(e => e.date > weekStr);
  const byDate = {};
  laterEvents.forEach(e => { (byDate[e.date] = byDate[e.date] || []).push(e); });
  const laterHTML = Object.keys(byDate).sort().map(ds =>
    `<div class="event-date-head">${fmtDate(ds)}</div>` +
    byDate[ds].sort((a,b) => (a.time||'') < (b.time||'') ? -1 : 1).map(eventItemHTML).join('')
  ).join('');
  document.getElementById('dash-events-later').innerHTML = laterHTML || `<div class="empty">${t('empty_events_later')}</div>`;
  document.getElementById('btn-later').style.display = laterEvents.length ? '' : 'none';
  document.getElementById('btn-later').textContent = showLater ? t('hide_later') : t('show_later');
  if (!laterEvents.length) { showLater = false; document.getElementById('dash-events-later').style.display = 'none'; }
}
// Keep "now" up to date (hero, relative days) while the app stays open.
setInterval(() => { if (!document.hidden && document.getElementById('view-dash').classList.contains('active')) renderDash(); }, 60000);
document.addEventListener('visibilitychange', () => { if (!document.hidden) renderAll(); });

// ---------- Notifications ----------
let notifEnabled = localStorage.getItem('planner_notif') === '1';
function updateNotifBtn() {
  const btn = document.getElementById('btn-notif');
  if (!('Notification' in window)) { btn.style.display = 'none'; return; }
  if (Notification.permission === 'denied') { btn.textContent = t('notif_blocked'); btn.classList.remove('on'); return; }
  btn.textContent = notifEnabled && Notification.permission === 'granted' ? t('notif_on') : t('notif_off');
  btn.classList.toggle('on', notifEnabled && Notification.permission === 'granted');
}
function toggleNotif() {
  if (!('Notification' in window)) return;
  if (notifEnabled) {
    notifEnabled = false;
    localStorage.setItem('planner_notif', '0');
    updateNotifBtn();
    return;
  }
  Notification.requestPermission().then(perm => {
    if (perm === 'granted') {
      notifEnabled = true;
      localStorage.setItem('planner_notif', '1');
    }
    updateNotifBtn();
  });
}
let notifyOffsets = store.load('notifyOffsets', [0]);
const OFFSET_OPTS = [0, 5, 15, 30, 60, 1440];
function renderOffsetChips() {
  const el = document.getElementById('notif-offsets');
  if (!el) return;
  el.innerHTML = `<span class="settings-label">${t('notify_when')}</span>` +
    OFFSET_OPTS.map(o => `<button class="chip-btn ${notifyOffsets.includes(o) ? 'on' : ''}" onclick="toggleOffset(${o})">${t('off_' + o)}</button>`).join('');
}
function toggleOffset(o) {
  notifyOffsets = notifyOffsets.includes(o) ? notifyOffsets.filter(x => x !== o) : [...notifyOffsets, o];
  store.saveRaw('notifyOffsets', notifyOffsets);
  renderOffsetChips();
}
// Android Chrome rejects `new Notification()`, so go through the service worker when possible.
function showNotif(title, opts = {}) {
  opts = { icon: 'icon-192.png', badge: 'icon-192.png', ...opts };
  const direct = () => { try { new Notification(title, opts); } catch (e) { console.error(e); } };
  if (!('serviceWorker' in navigator)) return direct();
  navigator.serviceWorker.getRegistration()
    .then(reg => reg ? reg.showNotification(title, opts) : direct())
    .catch(direct);
}
const notifiedKey = 'planner_notified';
function loadNotified() {
  try {
    const o = JSON.parse(localStorage.getItem(notifiedKey)) || {};
    const cutoff = Date.now() - 2 * 86400000;
    Object.keys(o).forEach(k => { if (o[k] < cutoff) delete o[k]; });
    return o;
  } catch { return {}; }
}
function fireNotif(icon, title, body, key) {
  const done = loadNotified();
  if (done[key]) return;
  done[key] = Date.now();
  localStorage.setItem(notifiedKey, JSON.stringify(done));
  beep();
  showNotif(icon + ' ' + title, { body, tag: key });
}
// Background tabs can delay timers by a minute or more, so fire anything whose time
// fell between the previous check and now instead of matching the exact minute.
let lastReminderCheck = Date.now() - 60000;
function checkReminders() {
  const nowMs = Date.now();
  const from = Math.max(lastReminderCheck, nowMs - 15 * 60000); // skip stale ones after long sleeps
  lastReminderCheck = nowMs;
  if (!notifEnabled || !('Notification' in window) || Notification.permission !== 'granted') return;
  const due = ms => ms > from && ms <= nowMs;
  const today = todayStr();
  const days = [-1, 0, 1, 2].map(n => dateToStr(new Date(Date.now() + n * 86400000)));

  days.forEach(ds => {
    const targetMs = tm => { const [H, M] = tm.split(':').map(Number); const d = strToDate(ds); d.setHours(H, M, 0, 0); return d.getTime(); };
    const check = (item, icon, keyPrefix) => {
      if (item.notify === false) return;
      if (item.notifyAt) {
        if (due(targetMs(item.notifyAt)))
          fireNotif(icon, item.title, (timeStr(item) ? timeStr(item) + ' · ' : '') + fmtDate(ds), keyPrefix + item.id + ds + 'na');
      } else if (item.time) {
        notifyOffsets.forEach(off => {
          if (due(targetMs(item.time) - off * 60000))
            fireNotif(icon, item.title, (off ? t('off_' + off) + ' · ' : '') + fmtDate(ds) + ' ' + timeStr(item), keyPrefix + item.id + ds + off);
        });
      }
    };
    eventsOn(ds).forEach(e => check(e, '📅', 'e'));
    tasks.filter(tk => !tk.done && tk.due === ds).forEach(tk => check(tk, '📌', 't'));
  });

  habits.filter(h => h.remind && !h.dates.includes(today)).forEach(h => {
    const [H, M] = h.remind.split(':').map(Number);
    const d = new Date(); d.setHours(H, M, 0, 0);
    if (due(d.getTime())) fireNotif('🔥', h.name, t('habit_notif_body'), 'h' + h.id + today);
  });
}
setInterval(checkReminders, 20000);
// Keyboard: Esc closes the day modal; Enter/Space on a focused row or calendar cell acts like a tap.
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && document.getElementById('task-sheet-bg').classList.contains('open')) closeTaskSheet();
  else if (e.key === 'Escape' && document.getElementById('modal-bg').classList.contains('open')) closeModal();
  const el = e.target;
  if ((e.key === 'Enter' || e.key === ' ') && el.matches && el.matches('.task-item, .habit-item, .cal-cell, .modal-event-item, .mood-week-day')) {
    e.preventDefault();
    el.click();
  }
});
// Make tappable rows reachable with Tab.
new MutationObserver(() => {
  document.querySelectorAll('.task-item:not([tabindex]), .habit-item:not([tabindex]), .cal-cell:not([tabindex]), .modal-event-item:not([tabindex]), .mood-week-day:not([tabindex])')
    .forEach(el => { el.tabIndex = 0; el.setAttribute('role', 'button'); });
}).observe(document.querySelector('main').parentNode, { childList: true, subtree: true });
document.addEventListener('visibilitychange', () => { if (!document.hidden) checkReminders(); });

// ---------- Init ----------
function renderAll() {
  renderTasks(); renderCal(); renderProj(); renderHabits(); renderDiary(); renderDash(); renderStats();
}
document.getElementById('pomo-work-min').value = pomoCfg.work;
document.getElementById('pomo-break-min').value = pomoCfg.brk;
applyTheme();
pomoRestore();
renderColorSwatches();
updateRepeatUI();
applyI18n();
renderDueChips();
renderMoodPicker();
renderAll();
initFirebase();
