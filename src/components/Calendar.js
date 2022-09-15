const now = new Date();
const todayWeak = now.getDay();
const today = now.getDate();
const lastday = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

const [daylist, setDaylist] = useState([]);
const [weaklist, setWeaklist] = useState([]);