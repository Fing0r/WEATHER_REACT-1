import format from "date-fns/format";

function getTime(timestump) {
  format(timestump, "hh:mm");
}

export default getTime;
