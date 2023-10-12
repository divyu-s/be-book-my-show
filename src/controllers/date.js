/**
 * get dates of next 7 days
 * @param {*} req
 * @param {*} res
 */
export const getDates = async (req, res) => {
  const dates = [];
  for (let i = 1; i <= 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    dates.push(
      date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
    );
  }

  res.status(200).json(dates);
};
