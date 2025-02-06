const {
  getNumberProperties,
  fetchFunFact,
} = require("../services/number.Service");

const classifyNumber = async (req, res) => {
  const { number } = req.query;

  // Validate input
  if (!number || isNaN(number)) {
    return res.status(400).json({
      number: number || "undefined",
      error: true,
    });
  }

  const num = parseInt(number, 10);

  try {
    const properties = getNumberProperties(num);
    const funFact = await fetchFunFact(num);

    res.status(200).json({
      number: num,
      is_prime: properties.isPrime,
      is_perfect: properties.isPerfect,
      properties: properties.properties,
      digit_sum: properties.digitSum,
      fun_fact: funFact,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { classifyNumber };
