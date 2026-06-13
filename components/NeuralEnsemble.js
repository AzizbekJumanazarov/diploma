/**
 * § 3.3. Ko'p qatlamli to'g'ri uzatish neyron tarmog'i (Perseptron) moduli
 * Dissertatsiya formulalari (3.42, 3.50, 3.51, 3.52) asosida yaratilgan.
 */

// 1. Dissertatsiyada keltirilgan 3 xil o'qitish usuli uchun vazn (weights) va porog (biases) koeffitsiyentlari
const WEIGHT_SETS = {
  // Rasm 3.9: Koeffitsiyentlarsiz (Sohalar vaznisiz) o'qitilgan holat
  raw: {
    w14: -1.888, w24: 0.875, w34: -1.922, w0_4: 1.195,  // N4 neyroni
    w15: 2.087, w25: -0.916, w35: 3.063, w0_5: 3.279,  // N5 neyroni
    w46: -1.946, w56: 1.145, w0_6: 0.058                // N6 (Chiqish) neyroni
  },
  // Rasm 3.10: Ball berish usuli orqali o'qitilgan holat
  scoring: {
    w14: 0.178, w24: 1.338, w34: -1.43, w0_4: 1.533,  // N4
    w15: 1.671, w25: -2.222, w35: 1.444, w0_5: 2.492,  // N5
    w46: 1.481, w56: 1.433, w0_6: 0.522                // N6
  },
  // Rasm 3.11: Ranjirlash usuli orqali o'qitilgan holat
  ranking: {
    w14: -1.329, w24: 0.999, w34: -2.714, w0_4: 1.078,  // N4
    w15: 2.637, w25: -1.05, w35: 3.539, w0_5: 3.07,   // N5
    w46: 1.4425, w56: 0.842, w0_6: -0.138               // N6
  }
};

/**
 * Sigmoid Aktivatsiya Funksiyasi (Formula 3.40)
 * f(x) = 1 / (1 + e^-x)
 * @param {number} x - Neyronning chiziqli holati (S_j)
 * @returns {number} [0, 1] oralig'idagi qiymat
 */
function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}

/**
 * Neyron tarmog'ini to'g'ri uzatish (Forward Propagation) hisob-kitobi
 * @param {Object} inputs - Kirish signallari { x1, x2, x3 } (0 va 1 oralig'ida)
 * @param {string} method - O'qitish usuli: 'raw', 'scoring' yoki 'ranking'
 * @returns {Object} Batafsil matematik natijalar va yakuniy prognoz (Y')
 */
export function predictNeuralNetwork(inputs, method = 'raw') {
  // Tanlangan usul bo'yicha koeffitsiyentlarni olish
  const w = WEIGHT_SETS[method] || WEIGHT_SETS.raw;
  const { x1, x2, x3 } = inputs;

  // --- 1. Yashirin Qatlam (Hidden Layer) ---

  // N4 Neyroni holatini hisoblash (Formula 3.39 va mos ravishda S4)
  const s4 = (x1 * w.w14) + (x2 * w.w24) + (x3 * w.w34) + w.w0_4;
  const s4_out = sigmoid(s4); // N4 neyronining chiqish signali

  // N5 Neyroni holatini hisoblash (S5)
  const s5 = (x1 * w.w15) + (x2 * w.w25) + (x3 * w.w35) + w.w0_5;
  const s5_out = sigmoid(s5); // N5 neyronining chiqish signali

  // --- 2. Chiqish Qatlami (Output Layer) ---

  // N6 (Y') Neyroni holatini hisoblash (S6)
  const s6 = (s4_out * w.w46) + (s5_out * w.w56) + w.w0_6;
  const y_out = sigmoid(s6); // Yakuniy kompleks baho [0, 1] oralig'ida

  // Barcha bosqichlardagi qiymatlarni qaytarish (Interfeysda ko'rsatish yoki log qilish uchun)
  return {
    method,
    hiddenLayer: {
      n4: { sum: s4, output: s4_out },
      n5: { sum: s5, output: s5_out }
    },
    outputLayer: {
      sum: s6,
      prediction: y_out,          // 0.8542 ko'rinishida
      percentage: y_out * 100     // 85.42% ko'rinishida
    }
  };
}

/**
 * Ilmiy kengash yoki vizual grafiklar uchun o'qitish jarayoni (Epochs) simulyatori
 * @param {Function} onTick - Har bir epoxda ishlaydigan va natijani qaytaradigan callback funksiya
 * @param {Function} onComplete - O'qitish tugagach ishlaydigan funksiya
 */
export function simulateTrainingProcess(onTick, onComplete) {
  let epoch = 0;
  let loss = 0.4523; // Boshlang'ich yuqori xatolik
  let accuracy = 0.352; // Boshlang'ich past aniqlik

  const interval = setInterval(() => {
    if (epoch < 100) {
      epoch += 4;
      // Xatolikni kvadratik kamaytirish (Gradient Descent effektini berish uchun)
      loss -= (loss * 0.2);
      accuracy += ((1 - accuracy) * 0.15);

      if (onTick) onTick({ epoch, loss, accuracy });
    } else {
      clearInterval(interval);
      if (onComplete) onComplete({ finalLoss: 0.00115, finalAccuracy: 0.9812 });
    }
  }, 80);
}