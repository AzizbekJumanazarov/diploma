const MAHALLALAR_DATA = [
    {
        id: 1,
        name: "1-Mahalla",
        m1: { x1: 2371, x2: 649, x3: 194, x4: 726, x5: 182, x6: 486, x7: 149, x8: 312, x9: 189 },
        m2: { total_pop: 12276, child_pop: 2428, active_pop: 5993, old_pop: 1797, chronic_sick: 694, prev_check: 4513, sport_grounds: 13, sport_grounds_1000: 1.059, sport_clubs: 17, kids_in_sport: 910, doc_ratio: 714, med_stations: 1, med_satisfaction: 49.19, healthy_events: 62, bad_habits: 27.01, healthy_diet: 70.86, eco_events: 71.72 },
        m3: { x1: 1, x2: 4, x3: 5, x4: 2, x5: 3, x6: 3, x7: 5, x8: 2, x9: 1 }
    },
    {
        id: 2,
        name: "2-Mahalla",
        m1: { x1: 3314, x2: 667, x3: 314, x4: 981, x5: 248, x6: 617, x7: 164, x8: 421, x9: 208 },
        m2: { total_pop: 8673, child_pop: 1867, active_pop: 5013, old_pop: 1098, chronic_sick: 271, prev_check: 7215, sport_grounds: 9, sport_grounds_1000: 1.0377, sport_clubs: 8, kids_in_sport: 253, doc_ratio: 4046, med_stations: 2, med_satisfaction: 40.66, healthy_events: 14, bad_habits: 38.75, healthy_diet: 61.32, eco_events: 81.03 },
        m3: { x1: 5, x2: 5, x3: 5, x4: 2, x5: 1, x6: 3, x7: 3, x8: 4, x9: 2 }
    },
    {
        id: 3,
        name: "3-Mahalla",
        m1: { x1: 2857, x2: 797, x3: 356, x4: 1208, x5: 245, x6: 64, x7: 129, x8: 83, x9: 138 },
        m2: { total_pop: 13755, child_pop: 3487, active_pop: 8477, old_pop: 911, chronic_sick: 619, prev_check: 6788, sport_grounds: 12, sport_grounds_1000: 0.8724, sport_clubs: 28, kids_in_sport: 868, doc_ratio: 1292, med_stations: 1, med_satisfaction: 75.34, healthy_events: 78, bad_habits: 44.39, healthy_diet: 82.7, eco_events: 86.25 },
        m3: { x1: 3, x2: 1, x3: 4, x4: 5, x5: 2, x6: 4, x7: 1, x8: 3, x9: 5 }
    },
    {
        id: 4,
        name: "4-Mahalla",
        m1: { x1: 4012, x2: 915, x3: 283, x4: 1374, x5: 150, x6: 423, x7: 917, x8: 489, x9: 270 },
        m2: { total_pop: 8027, child_pop: 1802, active_pop: 4031, old_pop: 1065, chronic_sick: 805, prev_check: 3518, sport_grounds: 4, sport_grounds_1000: 0.4983, sport_clubs: 17, kids_in_sport: 732, doc_ratio: 2793, med_stations: 1, med_satisfaction: 79.48, healthy_events: 21, bad_habits: 19.56, healthy_diet: 94.11, eco_events: 66.32 },
        m3: { x1: 2, x2: 5, x3: 3, x4: 1, x5: 4, x6: 2, x7: 4, x8: 5, x9: 3 }
    },
    {
        id: 5,
        name: "5-Mahalla",
        m1: { x1: 3723, x2: 745, x3: 389, x4: 1344, x5: 205, x6: 0, x7: 144, x8: 147, x9: 243 },
        m2: { total_pop: 10925, child_pop: 2350, active_pop: 6534, old_pop: 1007, chronic_sick: 444, prev_check: 9203, sport_grounds: 12, sport_grounds_1000: 1.0984, sport_clubs: 12, kids_in_sport: 203, doc_ratio: 3887, med_stations: 5, med_satisfaction: 78.79, healthy_events: 25, bad_habits: 24.47, healthy_diet: 85.2, eco_events: 66.57 },
        m3: { x1: 4, x2: 2, x3: 1, x4: 3, x5: 5, x6: 5, x7: 2, x8: 1, x9: 4 }
    },
    {
        id: 6,
        name: "6-Mahalla",
        m1: { x1: 2977, x2: 576, x3: 274, x4: 915, x5: 140, x6: 273, x7: 355, x8: 242, x9: 128 },
        m2: { total_pop: 4140, child_pop: 921, active_pop: 2317, old_pop: 340, chronic_sick: 331, prev_check: 2839, sport_grounds: 5, sport_grounds_1000: 1.2077, sport_clubs: 4, kids_in_sport: 157, doc_ratio: 4191, med_stations: 2, med_satisfaction: 40.55, healthy_events: 9, bad_habits: 8.5, healthy_diet: 63.33, eco_events: 79.7 },
        m3: { x1: 1, x2: 3, x3: 5, x4: 4, x5: 2, x6: 1, x7: 3, x8: 4, x9: 2 }
    },
    {
        id: 7,
        name: "7-Mahalla",
        m1: { x1: 3814, x2: 750, x3: 308, x4: 1125, x5: 130, x6: 148, x7: 190, x8: 0, x9: 277 },
        m2: { total_pop: 8716, child_pop: 2401, active_pop: 4569, old_pop: 872, chronic_sick: 1037, prev_check: 4061, sport_grounds: 7, sport_grounds_1000: 0.8031, sport_clubs: 19, kids_in_sport: 1018, doc_ratio: 1012, med_stations: 5, med_satisfaction: 80.8, healthy_events: 78, bad_habits: 17.95, healthy_diet: 34.95, eco_events: 23.92 },
        m3: { x1: 5, x2: 4, x3: 2, x4: 3, x5: 1, x6: 5, x7: 4, x8: 2, x9: 3 }
    },
    {
        id: 8,
        name: "8-Mahalla",
        m1: { x1: 2945, x2: 642, x3: 274, x4: 888, x5: 225, x6: 415, x7: 320, x8: 66, x9: 121 },
        m2: { total_pop: 1853, child_pop: 616, active_pop: 836, old_pop: 304, chronic_sick: 232, prev_check: 774, sport_grounds: 2, sport_grounds_1000: 1.0793, sport_clubs: 4, kids_in_sport: 132, doc_ratio: 2900, med_stations: 1, med_satisfaction: 44.32, healthy_events: 77, bad_habits: 26.11, healthy_diet: 76.18, eco_events: 56.67 },
        m3: { x1: 2, x2: 1, x3: 3, x4: 5, x5: 4, x6: 2, x7: 5, x8: 1, x9: 4 }
    },
    {
        id: 9,
        name: "9-Mahalla",
        m1: { x1: 2799, x2: 716, x3: 229, x4: 970, x5: 137, x6: 346, x7: 185, x8: 56, x9: 98 },
        m2: { total_pop: 1809, child_pop: 499, active_pop: 836, old_pop: 205, chronic_sick: 179, prev_check: 1719, sport_grounds: 2, sport_grounds_1000: 1.1056, sport_clubs: 1, kids_in_sport: 91, doc_ratio: 2642, med_stations: 1, med_satisfaction: 79.65, healthy_events: 83, bad_habits: 44.1, healthy_diet: 55.28, eco_events: 21.07 },
        m3: { x1: 4, x2: 3, x3: 1, x4: 2, x5: 5, x6: 3, x7: 2, x8: 4, x9: 5 }
    },
    {
        id: 10,
        name: "10-Mahalla",
        m1: { x1: 2836, x2: 618, x3: 280, x4: 715, x5: 182, x6: 537, x7: 438, x8: 169, x9: 117 },
        m2: { total_pop: 12609, child_pop: 3228, active_pop: 6083, old_pop: 1322, chronic_sick: 2468, prev_check: 7304, sport_grounds: 5, sport_grounds_1000: 0.3965, sport_clubs: 17, kids_in_sport: 1457, doc_ratio: 1324, med_stations: 3, med_satisfaction: 95.7, healthy_events: 67, bad_habits: 21.96, healthy_diet: 53.99, eco_events: 20.65 },
        m3: { x1: 3, x2: 5, x3: 4, x4: 1, x5: 2, x6: 4, x7: 1, x8: 3, x9: 2 }
    },
    {
        id: 11,
        name: "11-Mahalla",
        m1: { x1: 3829, x2: 980, x3: 422, x4: 1414, x5: 322, x6: 571, x7: 326, x8: 1, x9: 93 },
        m2: { total_pop: 5481, child_pop: 1043, active_pop: 3247, old_pop: 289, chronic_sick: 777, prev_check: 1670, sport_grounds: 5, sport_grounds_1000: 0.9122, sport_clubs: 2, kids_in_sport: 91, doc_ratio: 713, med_stations: 1, med_satisfaction: 66.36, healthy_events: 31, bad_habits: 23.9, healthy_diet: 55.83, eco_events: 73.66 },
        m3: { x1: 1, x2: 2, x3: 5, x4: 4, x5: 3, x6: 1, x7: 5, x8: 4, x9: 1 }
    },
    {
        id: 12,
        name: "12-Mahalla",
        m1: { x1: 2685, x2: 697, x3: 188, x4: 980, x5: 261, x6: 229, x7: 270, x8: 221, x9: 127 },
        m2: { total_pop: 11155, child_pop: 3036, active_pop: 5791, old_pop: 910, chronic_sick: 1197, prev_check: 4041, sport_grounds: 10, sport_grounds_1000: 0.8965, sport_clubs: 11, kids_in_sport: 838, doc_ratio: 3710, med_stations: 1, med_satisfaction: 74.86, healthy_events: 66, bad_habits: 6.49, healthy_diet: 71.9, eco_events: 80.45 },
        m3: { x1: 5, x2: 3, x3: 2, x4: 5, x5: 4, x6: 2, x7: 3, x8: 1, x9: 4 }
    },
    {
        id: 13,
        name: "13-Mahalla",
        m1: { x1: 4173, x2: 980, x3: 346, x4: 1694, x5: 366, x6: 289, x7: 144, x8: 124, x9: 134 },
        m2: { total_pop: 3590, child_pop: 789, active_pop: 1946, old_pop: 268, chronic_sick: 395, prev_check: 1737, sport_grounds: 2, sport_grounds_1000: 0.5571, sport_clubs: 8, kids_in_sport: 232, doc_ratio: 3701, med_stations: 1, med_satisfaction: 38.09, healthy_events: 100, bad_habits: 38.28, healthy_diet: 92.36, eco_events: 91.52 },
        m3: { x1: 2, x2: 4, x3: 1, x4: 3, x5: 5, x6: 5, x7: 4, x8: 3, x9: 2 }
    },
    {
        id: 14,
        name: "14-Mahalla",
        m1: { x1: 4159, x2: 961, x3: 362, x4: 1427, x5: 223, x6: 140, x7: 199, x8: 364, x9: 229 },
        m2: { total_pop: 5672, child_pop: 1172, active_pop: 2771, old_pop: 642, chronic_sick: 602, prev_check: 1921, sport_grounds: 3, sport_grounds_1000: 0.5289, sport_clubs: 13, kids_in_sport: 230, doc_ratio: 3423, med_stations: 2, med_satisfaction: 60.8, healthy_events: 96, bad_habits: 44.81, healthy_diet: 57.24, eco_events: 73.22 },
        m3: { x1: 4, x2: 1, x3: 5, x4: 2, x5: 1, x6: 3, x7: 2, x8: 5, x9: 4 }
    },
    {
        id: 15,
        name: "15-Mahalla",
        m1: { x1: 3262, x2: 633, x3: 301, x4: 1151, x5: 132, x6: 206, x7: 227, x8: 146, x9: 162 },
        m2: { total_pop: 4336, child_pop: 912, active_pop: 2005, old_pop: 340, chronic_sick: 736, prev_check: 1475, sport_grounds: 2, sport_grounds_1000: 0.4613, sport_clubs: 2, kids_in_sport: 285, doc_ratio: 3910, med_stations: 2, med_satisfaction: 38.47, healthy_events: 53, bad_habits: 38.91, healthy_diet: 15.82, eco_events: 15.98 },
        m3: { x1: 3, x2: 5, x3: 3, x4: 4, x5: 4, x6: 1, x7: 5, x8: 2, x9: 1 }
    },
    {
        id: 16,
        name: "16-Mahalla",
        m1: { x1: 3445, x2: 709, x3: 304, x4: 1100, x5: 133, x6: 328, x7: 221, x8: 0, x9: 206 },
        m2: { total_pop: 5653, child_pop: 1383, active_pop: 2811, old_pop: 975, chronic_sick: 791, prev_check: 1844, sport_grounds: 1, sport_grounds_1000: 0.1769, sport_clubs: 9, kids_in_sport: 499, doc_ratio: 1739, med_stations: 1, med_satisfaction: 75.85, healthy_events: 35, bad_habits: 14.89, healthy_diet: 21.12, eco_events: 66.8 },
        m3: { x1: 1, x2: 2, x3: 4, x4: 1, x5: 5, x6: 4, x7: 3, x8: 3, x9: 5 }
    },
    {
        id: 17,
        name: "17-Mahalla",
        m1: { x1: 3083, x2: 701, x3: 236, x4: 1297, x5: 188, x6: 308, x7: 261, x8: 145, x9: 102 },
        m2: { total_pop: 9291, child_pop: 2142, active_pop: 4263, old_pop: 1373, chronic_sick: 1088, prev_check: 8910, sport_grounds: 12, sport_grounds_1000: 1.2916, sport_clubs: 4, kids_in_sport: 358, doc_ratio: 1555, med_stations: 6, med_satisfaction: 88.73, healthy_events: 89, bad_habits: 19.15, healthy_diet: 23.41, eco_events: 83.37 },
        m3: { x1: 5, x2: 3, x3: 2, x4: 5, x5: 2, x6: 2, x7: 1, x8: 4, x9: 2 }
    },
    {
        id: 18,
        name: "18-Mahalla",
        m1: { x1: 2413, x2: 500, x3: 203, x4: 897, x5: 162, x6: 358, x7: 337, x8: 0, x9: 31 },
        m2: { total_pop: 13326, child_pop: 3044, active_pop: 7004, old_pop: 2371, chronic_sick: 1739, prev_check: 9872, sport_grounds: 11, sport_grounds_1000: 0.8255, sport_clubs: 29, kids_in_sport: 326, doc_ratio: 3761, med_stations: 3, med_satisfaction: 89.27, healthy_events: 76, bad_habits: 10.37, healthy_diet: 33.95, eco_events: 28.54 },
        m3: { x1: 2, x2: 4, x3: 5, x4: 3, x5: 3, x6: 5, x7: 4, x8: 1, x9: 3 }
    },
    {
        id: 19,
        name: "19-Mahalla",
        m1: { x1: 2320, x2: 509, x3: 232, x4: 927, x5: 238, x6: 220, x7: 246, x8: 66, x9: 70 },
        m2: { total_pop: 7417, child_pop: 1577, active_pop: 3641, old_pop: 982, chronic_sick: 911, prev_check: 6657, sport_grounds: 9, sport_grounds_1000: 1.2134, sport_clubs: 3, kids_in_sport: 446, doc_ratio: 1596, med_stations: 1, med_satisfaction: 82.04, healthy_events: 66, bad_habits: 14.74, healthy_diet: 73, eco_events: 58.55 },
        m3: { x1: 4, x2: 1, x3: 1, x4: 4, x5: 1, x6: 3, x7: 5, x8: 5, x9: 2 }
    },
    {
        id: 20,
        name: "20-Mahalla",
        m1: { x1: 2596, x2: 544, x3: 251, x4: 866, x5: 126, x6: 235, x7: 198, x8: 37, x9: 119 },
        m2: { total_pop: 8807, child_pop: 2376, active_pop: 5342, old_pop: 568, chronic_sick: 1421, prev_check: 3508, sport_grounds: 2, sport_grounds_1000: 0.2271, sport_clubs: 9, kids_in_sport: 841, doc_ratio: 2147, med_stations: 1, med_satisfaction: 57.24, healthy_events: 94, bad_habits: 43.86, healthy_diet: 13.39, eco_events: 41.49 },
        m3: { x1: 3, x2: 5, x3: 3, x4: 2, x5: 4, x6: 1, x7: 2, x8: 2, x9: 4 }
    },
    {
        id: 21,
        name: "21-Mahalla",
        m1: { x1: 3678, x2: 800, x3: 428, x4: 1177, x5: 197, x6: 29, x7: 91, x8: 148, x9: 204 },
        m2: { total_pop: 12974, child_pop: 2853, active_pop: 8032, old_pop: 822, chronic_sick: 2569, prev_check: 7372, sport_grounds: 12, sport_grounds_1000: 0.9249, sport_clubs: 7, kids_in_sport: 1602, doc_ratio: 3713, med_stations: 9, med_satisfaction: 84.46, healthy_events: 89, bad_habits: 5.02, healthy_diet: 72.61, eco_events: 39.23 },
        m3: { x1: 1, x2: 2, x3: 4, x4: 5, x5: 5, x6: 4, x7: 3, x8: 1, x9: 5 }
    },
    {
        id: 22,
        name: "22-Mahalla",
        m1: { x1: 3016, x2: 654, x3: 241, x4: 1162, x5: 199, x6: 190, x7: 292, x8: 194, x9: 121 },
        m2: { total_pop: 8445, child_pop: 2635, active_pop: 4048, old_pop: 1387, chronic_sick: 690, prev_check: 7004, sport_grounds: 2, sport_grounds_1000: 0.2341, sport_clubs: 17, kids_in_sport: 1376, doc_ratio: 1401, med_stations: 5, med_satisfaction: 63.08, healthy_events: 34, bad_habits: 36.61, healthy_diet: 29.35, eco_events: 12.08 },
        m3: { x1: 5, x2: 3, x3: 1, x4: 1, x5: 2, x6: 3, x7: 5, x8: 4, x9: 3 }
    },
    {
        id: 23,
        name: "23-Mahalla",
        m1: { x1: 2480, x2: 500, x3: 204, x4: 933, x5: 219, x6: 94, x7: 189, x8: 30, x9: 111 },
        m2: { total_pop: 4964, child_pop: 1210, active_pop: 2292, old_pop: 428, chronic_sick: 878, prev_check: 2640, sport_grounds: 4, sport_grounds_1000: 0.8058, sport_clubs: 8, kids_in_sport: 622, doc_ratio: 1792, med_stations: 1, med_satisfaction: 88.5, healthy_events: 30, bad_habits: 27.8, healthy_diet: 93.6, eco_events: 13.37 },
        m3: { x1: 2, x2: 4, x3: 5, x4: 4, x5: 3, x6: 2, x7: 1, x8: 5, x9: 1 }
    },
    {
        id: 24,
        name: "24-Mahalla",
        m1: { x1: 4090, x2: 767, x3: 404, x4: 1366, x5: 164, x6: 414, x7: 440, x8: 184, x9: 102 },
        m2: { total_pop: 11574, child_pop: 2888, active_pop: 5592, old_pop: 1675, chronic_sick: 1680, prev_check: 7379, sport_grounds: 7, sport_grounds_1000: 0.6048, sport_clubs: 17, kids_in_sport: 549, doc_ratio: 3152, med_stations: 1, med_satisfaction: 91.46, healthy_events: 56, bad_habits: 33.5, healthy_diet: 73.07, eco_events: 69.02 },
        m3: { x1: 4, x2: 1, x3: 2, x4: 3, x5: 1, x6: 5, x7: 4, x8: 2, x9: 4 }
    },
    {
        id: 25,
        name: "25-Mahalla",
        m1: { x1: 4012, x2: 772, x3: 296, x4: 1456, x5: 192, x6: 263, x7: 199, x8: 213, x9: 255 },
        m2: { total_pop: 7767, child_pop: 1934, active_pop: 4050, old_pop: 1346, chronic_sick: 1153, prev_check: 5731, sport_grounds: 2, sport_grounds_1000: 0.2575, sport_clubs: 16, kids_in_sport: 636, doc_ratio: 3001, med_stations: 2, med_satisfaction: 77.53, healthy_events: 58, bad_habits: 11.87, healthy_diet: 66.52, eco_events: 43.36 },
        m3: { x1: 3, x2: 5, x3: 4, x4: 2, x5: 5, x6: 1, x7: 3, x8: 3, x9: 2 }
    },
    {
        id: 26,
        name: "26-Mahalla",
        m1: { x1: 3510, x2: 867, x3: 273, x4: 1289, x5: 152, x6: 395, x7: 187, x8: 38, x9: 118 },
        m2: { total_pop: 4651, child_pop: 1295, active_pop: 2430, old_pop: 415, chronic_sick: 140, prev_check: 2276, sport_grounds: 3, sport_grounds_1000: 0.645, sport_clubs: 7, kids_in_sport: 531, doc_ratio: 2274, med_stations: 2, med_satisfaction: 48.04, healthy_events: 50, bad_habits: 40.95, healthy_diet: 77.66, eco_events: 24.93 },
        m3: { x1: 1, x2: 3, x3: 1, x4: 5, x5: 4, x6: 4, x7: 2, x8: 1, x9: 5 }
    },
    {
        id: 27,
        name: "27-Mahalla",
        m1: { x1: 3959, x2: 969, x3: 503, x4: 1203, x5: 181, x6: 582, x7: 483, x8: 220, x9: 112 },
        m2: { total_pop: 3189, child_pop: 719, active_pop: 1708, old_pop: 435, chronic_sick: 152, prev_check: 2960, sport_grounds: 1, sport_grounds_1000: 0.3136, sport_clubs: 3, kids_in_sport: 355, doc_ratio: 1130, med_stations: 1, med_satisfaction: 95.02, healthy_events: 63, bad_habits: 35.51, healthy_diet: 48.71, eco_events: 87.98 },
        m3: { x1: 5, x2: 2, x3: 5, x4: 4, x5: 2, x6: 3, x7: 5, x8: 4, x9: 1 }
    },
    {
        id: 28,
        name: "28-Mahalla",
        m1: { x1: 2484, x2: 500, x3: 175, x4: 787, x5: 106, x6: 86, x7: 132, x8: 170, x9: 147 },
        m2: { total_pop: 11231, child_pop: 2371, active_pop: 5878, old_pop: 1578, chronic_sick: 858, prev_check: 8232, sport_grounds: 2, sport_grounds_1000: 0.1781, sport_clubs: 20, kids_in_sport: 1123, doc_ratio: 984, med_stations: 4, med_satisfaction: 45.73, healthy_events: 96, bad_habits: 25.24, healthy_diet: 14.27, eco_events: 31.93 },
        m3: { x1: 2, x2: 4, x3: 3, x4: 1, x5: 3, x6: 5, x7: 1, x8: 2, x9: 3 }
    },
    {
        id: 29,
        name: "29-Mahalla",
        m1: { x1: 2811, x2: 554, x3: 370, x4: 901, x5: 242, x6: 248, x7: 125, x8: 82, x9: 112 },
        m2: { total_pop: 3788, child_pop: 958, active_pop: 1939, old_pop: 584, chronic_sick: 825, prev_check: 2625, sport_grounds: 5, sport_grounds_1000: 1.32, sport_clubs: 8, kids_in_sport: 371, doc_ratio: 3189, med_stations: 1, med_satisfaction: 85.66, healthy_events: 57, bad_habits: 40.79, healthy_diet: 73.21, eco_events: 51.77 },
        m3: { x1: 4, x2: 1, x3: 2, x4: 3, x5: 5, x6: 2, x7: 4, x8: 5, x9: 4 }
    },
    {
        id: 30,
        name: "30-Mahalla",
        m1: { x1: 2536, x2: 561, x3: 238, x4: 869, x5: 215, x6: 311, x7: 302, x8: 47, x9: 37 },
        m2: { total_pop: 6046, child_pop: 1816, active_pop: 2789, old_pop: 962, chronic_sick: 1075, prev_check: 3748, sport_grounds: 3, sport_grounds_1000: 0.4962, sport_clubs: 7, kids_in_sport: 803, doc_ratio: 1444, med_stations: 2, med_satisfaction: 89.47, healthy_events: 13, bad_habits: 10.18, healthy_diet: 42.56, eco_events: 23.45 },
        m3: { x1: 3, x2: 5, x3: 4, x4: 2, x5: 1, x6: 4, x7: 3, x8: 1, x9: 2 }
    },
    {
        id: 31,
        name: "31-Mahalla",
        m1: { x1: 2750, x2: 698, x3: 208, x4: 740, x5: 151, x6: 63, x7: 36, x8: 159, x9: 186 },
        m2: { total_pop: 5305, child_pop: 1009, active_pop: 2982, old_pop: 546, chronic_sick: 578, prev_check: 2316, sport_grounds: 3, sport_grounds_1000: 0.5655, sport_clubs: 11, kids_in_sport: 375, doc_ratio: 3104, med_stations: 3, med_satisfaction: 81.7, healthy_events: 41, bad_habits: 4.24, healthy_diet: 39.9, eco_events: 76.31 },
        m3: { x1: 4, x2: 2, x3: 5, x4: 1, x5: 3, x6: 3, x7: 2, x8: 5, x9: 4 }
    },
    {
        id: 32,
        name: "32-Mahalla",
        m1: { x1: 3428, x2: 799, x3: 364, x4: 1170, x5: 259, x6: 422, x7: 310, x8: 163, x9: 118 },
        m2: { total_pop: 8665, child_pop: 2306, active_pop: 4512, old_pop: 1261, chronic_sick: 1738, prev_check: 5392, sport_grounds: 4, sport_grounds_1000: 0.4616, sport_clubs: 11, kids_in_sport: 608, doc_ratio: 3008, med_stations: 5, med_satisfaction: 79.18, healthy_events: 85, bad_habits: 41.7, healthy_diet: 93.36, eco_events: 57 },
        m3: { x1: 1, x2: 5, x3: 3, x4: 4, x5: 2, x6: 5, x7: 1, x8: 3, x9: 2 }
    },
    {
        id: 33,
        name: "33-Mahalla",
        m1: { x1: 3440, x2: 900, x3: 373, x4: 1322, x5: 154, x6: 102, x7: 188, x8: 285, x9: 212 },
        m2: { total_pop: 8255, child_pop: 2268, active_pop: 3777, old_pop: 1124, chronic_sick: 920, prev_check: 7199, sport_grounds: 3, sport_grounds_1000: 0.3634, sport_clubs: 6, kids_in_sport: 522, doc_ratio: 2237, med_stations: 2, med_satisfaction: 88.66, healthy_events: 31, bad_habits: 43, healthy_diet: 45.83, eco_events: 83.47 },
        m3: { x1: 3, x2: 1, x3: 4, x4: 2, x5: 5, x6: 4, x7: 3, x8: 1, x9: 5 }
    },
    {
        id: 34,
        name: "34-Mahalla",
        m1: { x1: 2853, x2: 621, x3: 242, x4: 802, x5: 115, x6: 374, x7: 267, x8: 147, x9: 175 },
        m2: { total_pop: 9505, child_pop: 1740, active_pop: 6147, old_pop: 1142, chronic_sick: 917, prev_check: 6930, sport_grounds: 10, sport_grounds_1000: 1.0521, sport_clubs: 15, kids_in_sport: 809, doc_ratio: 4019, med_stations: 2, med_satisfaction: 36.24, healthy_events: 19, bad_habits: 9.18, healthy_diet: 66.9, eco_events: 59.63 },
        m3: { x1: 5, x2: 4, x3: 2, x4: 5, x5: 1, x6: 2, x7: 5, x8: 4, x9: 3 }
    },
    {
        id: 35,
        name: "35-Mahalla",
        m1: { x1: 2324, x2: 500, x3: 265, x4: 941, x5: 105, x6: 257, x7: 245, x8: 46, x9: 53 },
        m2: { total_pop: 5371, child_pop: 1366, active_pop: 2738, old_pop: 447, chronic_sick: 779, prev_check: 5288, sport_grounds: 5, sport_grounds_1000: 0.9309, sport_clubs: 10, kids_in_sport: 191, doc_ratio: 1720, med_stations: 2, med_satisfaction: 91.66, healthy_events: 60, bad_habits: 41.23, healthy_diet: 41.9, eco_events: 92.85 },
        m3: { x1: 2, x2: 3, x3: 1, x4: 3, x5: 4, x6: 1, x7: 4, x8: 2, x9: 1 }
    },
    {
        id: 36,
        name: "36-Mahalla",
        m1: { x1: 3444, x2: 756, x3: 318, x4: 1263, x5: 216, x6: 394, x7: 388, x8: 38, x9: 88 },
        m2: { total_pop: 5049, child_pop: 970, active_pop: 2804, old_pop: 706, chronic_sick: 249, prev_check: 4089, sport_grounds: 6, sport_grounds_1000: 1.1884, sport_clubs: 7, kids_in_sport: 113, doc_ratio: 4142, med_stations: 3, med_satisfaction: 56.18, healthy_events: 46, bad_habits: 19.19, healthy_diet: 53.01, eco_events: 40.03 },
        m3: { x1: 4, x2: 5, x3: 5, x4: 2, x5: 3, x6: 5, x7: 3, x8: 4, x9: 2 }
    },
    {
        id: 37,
        name: "37-Mahalla",
        m1: { x1: 3691, x2: 932, x3: 326, x4: 1433, x5: 302, x6: 147, x7: 78, x8: 138, x9: 244 },
        m2: { total_pop: 8682, child_pop: 2705, active_pop: 4947, old_pop: 553, chronic_sick: 1309, prev_check: 7353, sport_grounds: 9, sport_grounds_1000: 1.0366, sport_clubs: 10, kids_in_sport: 1227, doc_ratio: 4076, med_stations: 2, med_satisfaction: 84.3, healthy_events: 56, bad_habits: 23.82, healthy_diet: 47.02, eco_events: 74.33 },
        m3: { x1: 3, x2: 2, x3: 4, x4: 1, x5: 5, x6: 2, x7: 1, x8: 3, x9: 5 }
    },
    {
        id: 38,
        name: "38-Mahalla",
        m1: { x1: 2704, x2: 626, x3: 256, x4: 905, x5: 205, x6: 210, x7: 212, x8: 233, x9: 181 },
        m2: { total_pop: 6197, child_pop: 1435, active_pop: 3869, old_pop: 508, chronic_sick: 514, prev_check: 3703, sport_grounds: 7, sport_grounds_1000: 1.1296, sport_clubs: 9, kids_in_sport: 599, doc_ratio: 1811, med_stations: 2, med_satisfaction: 54.83, healthy_events: 51, bad_habits: 18.55, healthy_diet: 31.96, eco_events: 34.61 },
        m3: { x1: 2, x2: 4, x3: 2, x4: 5, x5: 1, x6: 4, x7: 5, x8: 1, x9: 3 }
    },
    {
        id: 39,
        name: "39-Mahalla",
        m1: { x1: 4051, x2: 750, x3: 463, x4: 1369, x5: 249, x6: 79, x7: 211, x8: 66, x9: 140 },
        m2: { total_pop: 11567, child_pop: 3380, active_pop: 5219, old_pop: 994, chronic_sick: 2431, prev_check: 4124, sport_grounds: 12, sport_grounds_1000: 1.0374, sport_clubs: 14, kids_in_sport: 1578, doc_ratio: 3086, med_stations: 5, med_satisfaction: 64.94, healthy_events: 80, bad_habits: 7.82, healthy_diet: 28.84, eco_events: 70.88 },
        m3: { x1: 5, x2: 3, x3: 1, x4: 3, x5: 4, x6: 1, x7: 2, x8: 4, x9: 2 }
    },
    {
        id: 40,
        name: "40-Mahalla",
        m1: { x1: 3827, x2: 893, x3: 371, x4: 1206, x5: 185, x6: 21, x7: 161, x8: 300, x9: 297 },
        m2: { total_pop: 6816, child_pop: 1951, active_pop: 3504, old_pop: 668, chronic_sick: 650, prev_check: 6528, sport_grounds: 6, sport_grounds_1000: 0.8803, sport_clubs: 7, kids_in_sport: 584, doc_ratio: 1704, med_stations: 1, med_satisfaction: 79, healthy_events: 35, bad_habits: 34.46, healthy_diet: 90.82, eco_events: 70.73 },
        m3: { x1: 1, x2: 1, x3: 5, x4: 4, x5: 2, x6: 3, x7: 4, x8: 2, x9: 1 }
    },
    {
        id: 41,
        name: "41-Mahalla",
        m1: { x1: 4159, x2: 980, x3: 495, x4: 1377, x5: 247, x6: 164, x7: 210, x8: 50, x9: 215 },
        m2: { total_pop: 4938, child_pop: 1060, active_pop: 2839, old_pop: 558, chronic_sick: 1064, prev_check: 3191, sport_grounds: 2, sport_grounds_1000: 0.405, sport_clubs: 2, kids_in_sport: 166, doc_ratio: 1419, med_stations: 1, med_satisfaction: 35.86, healthy_events: 56, bad_habits: 15.25, healthy_diet: 92.82, eco_events: 58.7 },
        m3: { x1: 4, x2: 4, x3: 3, x4: 2, x5: 5, x6: 5, x7: 3, x8: 5, x9: 3 }
    },
    {
        id: 42,
        name: "42-Mahalla",
        m1: { x1: 4251, x2: 815, x3: 449, x4: 1671, x5: 270, x6: 0, x7: 149, x8: 118, x9: 220 },
        m2: { total_pop: 13226, child_pop: 4379, active_pop: 6310, old_pop: 1758, chronic_sick: 655, prev_check: 4075, sport_grounds: 6, sport_grounds_1000: 0.4537, sport_clubs: 16, kids_in_sport: 1040, doc_ratio: 4076, med_stations: 3, med_satisfaction: 87.57, healthy_events: 16, bad_habits: 6.68, healthy_diet: 51.8, eco_events: 60.78 },
        m3: { x1: 2, x2: 2, x3: 4, x4: 5, x5: 1, x6: 1, x7: 5, x8: 1, x9: 4 }
    },
    {
        id: 43,
        name: "43-Mahalla",
        m1: { x1: 3745, x2: 926, x3: 349, x4: 1278, x5: 282, x6: 390, x7: 402, x8: 0, x9: 82 },
        m2: { total_pop: 13046, child_pop: 2460, active_pop: 7648, old_pop: 905, chronic_sick: 1145, prev_check: 12472, sport_grounds: 4, sport_grounds_1000: 0.3066, sport_clubs: 24, kids_in_sport: 943, doc_ratio: 3447, med_stations: 3, med_satisfaction: 66.88, healthy_events: 48, bad_habits: 22.15, healthy_diet: 83.11, eco_events: 97.12 },
        m3: { x1: 5, x2: 3, x3: 1, x4: 3, x5: 4, x6: 4, x7: 2, x8: 4, x9: 2 }
    },
    {
        id: 44,
        name: "44-Mahalla",
        m1: { x1: 2726, x2: 662, x3: 250, x4: 1013, x5: 124, x6: 219, x7: 193, x8: 9, x9: 124 },
        m2: { total_pop: 6803, child_pop: 1843, active_pop: 4179, old_pop: 393, chronic_sick: 332, prev_check: 5466, sport_grounds: 6, sport_grounds_1000: 0.882, sport_clubs: 5, kids_in_sport: 174, doc_ratio: 1464, med_stations: 3, med_satisfaction: 44.55, healthy_events: 44, bad_habits: 32.26, healthy_diet: 49.94, eco_events: 12.87 },
        m3: { x1: 3, x2: 5, x3: 5, x4: 1, x5: 2, x6: 2, x7: 4, x8: 3, x9: 1 }
    },
    {
        id: 45,
        name: "45-Mahalla",
        m1: { x1: 4164, x2: 891, x3: 461, x4: 1791, x5: 339, x6: 446, x7: 378, x8: 132, x9: 103 },
        m2: { total_pop: 6520, child_pop: 1911, active_pop: 3128, old_pop: 922, chronic_sick: 1047, prev_check: 5932, sport_grounds: 7, sport_grounds_1000: 1.0736, sport_clubs: 10, kids_in_sport: 790, doc_ratio: 3961, med_stations: 2, med_satisfaction: 68.22, healthy_events: 67, bad_habits: 41.24, healthy_diet: 80.26, eco_events: 16.28 },
        m3: { x1: 1, x2: 1, x3: 2, x4: 4, x5: 5, x6: 3, x7: 1, x8: 2, x9: 5 }
    },
    {
        id: 46,
        name: "46-Mahalla",
        m1: { x1: 3368, x2: 858, x3: 387, x4: 1129, x5: 220, x6: 458, x7: 373, x8: 210, x9: 112 },
        m2: { total_pop: 4518, child_pop: 1386, active_pop: 2278, old_pop: 575, chronic_sick: 926, prev_check: 2665, sport_grounds: 3, sport_grounds_1000: 0.664, sport_clubs: 4, kids_in_sport: 376, doc_ratio: 1580, med_stations: 2, med_satisfaction: 61.7, healthy_events: 62, bad_habits: 40.47, healthy_diet: 72.44, eco_events: 63.13 },
        m3: { x1: 4, x2: 4, x3: 3, x4: 2, x5: 3, x6: 1, x7: 5, x8: 4, x9: 2 }
    },
    {
        id: 47,
        name: "47-Mahalla",
        m1: { x1: 3632, x2: 824, x3: 281, x4: 1207, x5: 317, x6: 232, x7: 227, x8: 34, x9: 183 },
        m2: { total_pop: 2223, child_pop: 433, active_pop: 1243, old_pop: 389, chronic_sick: 310, prev_check: 2062, sport_grounds: 3, sport_grounds_1000: 1.3495, sport_clubs: 4, kids_in_sport: 86, doc_ratio: 745, med_stations: 1, med_satisfaction: 63.7, healthy_events: 67, bad_habits: 41.56, healthy_diet: 25.43, eco_events: 61.51 },
        m3: { x1: 2, x2: 2, x3: 5, x4: 5, x5: 1, x6: 4, x7: 3, x8: 1, x9: 3 }
    },
    {
        id: 48,
        name: "48-Mahalla",
        m1: { x1: 3645, x2: 838, x3: 285, x4: 1210, x5: 225, x6: 378, x7: 329, x8: 258, x9: 235 },
        m2: { total_pop: 12200, child_pop: 3785, active_pop: 5569, old_pop: 2147, chronic_sick: 1313, prev_check: 6245, sport_grounds: 3, sport_grounds_1000: 0.2459, sport_clubs: 7, kids_in_sport: 1046, doc_ratio: 2384, med_stations: 6, med_satisfaction: 59.43, healthy_events: 77, bad_habits: 5.5, healthy_diet: 17.49, eco_events: 32.21 },
        m3: { x1: 5, x2: 3, x3: 4, x4: 3, x5: 4, x6: 5, x7: 2, x8: 5, x9: 1 }
    },
    {
        id: 49,
        name: "49-Mahalla",
        m1: { x1: 2720, x2: 550, x3: 200, x4: 1021, x5: 151, x6: 280, x7: 258, x8: 0, x9: 89 },
        m2: { total_pop: 3699, child_pop: 1240, active_pop: 1783, old_pop: 379, chronic_sick: 805, prev_check: 2715, sport_grounds: 3, sport_grounds_1000: 0.811, sport_clubs: 4, kids_in_sport: 190, doc_ratio: 1902, med_stations: 2, med_satisfaction: 73.15, healthy_events: 77, bad_habits: 12.35, healthy_diet: 56.68, eco_events: 91.64 },
        m3: { x1: 3, x2: 1, x3: 1, x4: 1, x5: 2, x6: 2, x7: 4, x8: 3, x9: 4 }
    },
    {
        id: 50,
        name: "50-Mahalla",
        m1: { x1: 2589, x2: 508, x3: 256, x4: 995, x5: 243, x6: 301, x7: 310, x8: 232, x9: 53 },
        m2: { total_pop: 8978, child_pop: 2881, active_pop: 4057, old_pop: 1015, chronic_sick: 1444, prev_check: 7430, sport_grounds: 9, sport_grounds_1000: 1.0025, sport_clubs: 8, kids_in_sport: 166, doc_ratio: 2069, med_stations: 2, med_satisfaction: 86.33, healthy_events: 16, bad_habits: 42.83, healthy_diet: 65.06, eco_events: 23.55 },
        m3: { x1: 1, x2: 5, x3: 3, x4: 4, x5: 5, x6: 4, x7: 1, x8: 2, x9: 2 }
    },
    {
        id: 51,
        name: "51-Mahalla",
        m1: { x1: 2401, x2: 578, x3: 151, x4: 818, x5: 141, x6: 116, x7: 63, x8: 235, x9: 195 },
        m2: { total_pop: 13540, child_pop: 3069, active_pop: 6833, old_pop: 1919, chronic_sick: 1647, prev_check: 8282, sport_grounds: 9, sport_grounds_1000: 0.6647, sport_clubs: 7, kids_in_sport: 475, doc_ratio: 2758, med_stations: 7, med_satisfaction: 43.33, healthy_events: 12, bad_habits: 35.68, healthy_diet: 82.63, eco_events: 39.91 },
        m3: { x1: 5, x2: 2, x3: 2, x4: 2, x5: 1, x6: 3, x7: 5, x8: 4, x9: 5 }
    },
    {
        id: 52,
        name: "52-Mahalla",
        m1: { x1: 2404, x2: 500, x3: 268, x4: 708, x5: 182, x6: 111, x7: 160, x8: 133, x9: 119 },
        m2: { total_pop: 10118, child_pop: 2254, active_pop: 6220, old_pop: 509, chronic_sick: 1914, prev_check: 6908, sport_grounds: 10, sport_grounds_1000: 0.9883, sport_clubs: 20, kids_in_sport: 666, doc_ratio: 2344, med_stations: 3, med_satisfaction: 81.54, healthy_events: 41, bad_habits: 42.25, healthy_diet: 83.92, eco_events: 96.31 },
        m3: { x1: 2, x2: 4, x3: 5, x4: 5, x5: 3, x6: 1, x7: 3, x8: 1, x9: 3 }
    },
    {
        id: 53,
        name: "53-Mahalla",
        m1: { x1: 2501, x2: 640, x3: 177, x4: 832, x5: 125, x6: 302, x7: 245, x8: 96, x9: 87 },
        m2: { total_pop: 5712, child_pop: 1551, active_pop: 3227, old_pop: 459, chronic_sick: 219, prev_check: 4521, sport_grounds: 6, sport_grounds_1000: 1.0504, sport_clubs: 11, kids_in_sport: 407, doc_ratio: 2989, med_stations: 3, med_satisfaction: 94.83, healthy_events: 52, bad_habits: 5.52, healthy_diet: 52.69, eco_events: 61.94 },
        m3: { x1: 4, x2: 3, x3: 4, x4: 1, x5: 4, x6: 2, x7: 2, x8: 3, x9: 1 }
    },
    {
        id: 54,
        name: "54-Mahalla",
        m1: { x1: 2748, x2: 662, x3: 327, x4: 686, x5: 101, x6: 428, x7: 293, x8: 243, x9: 157 },
        m2: { total_pop: 3444, child_pop: 1102, active_pop: 1682, old_pop: 369, chronic_sick: 402, prev_check: 2675, sport_grounds: 2, sport_grounds_1000: 0.5807, sport_clubs: 5, kids_in_sport: 149, doc_ratio: 2290, med_stations: 2, med_satisfaction: 55.65, healthy_events: 71, bad_habits: 30.64, healthy_diet: 82.4, eco_events: 85.01 },
        m3: { x1: 3, x2: 1, x3: 1, x4: 3, x5: 2, x6: 5, x7: 4, x8: 5, x9: 4 }
    },
    {
        id: 55,
        name: "55-Mahalla",
        m1: { x1: 3777, x2: 745, x3: 222, x4: 1416, x5: 276, x6: 461, x7: 299, x8: 115, x9: 168 },
        m2: { total_pop: 10542, child_pop: 2539, active_pop: 6017, old_pop: 961, chronic_sick: 1837, prev_check: 9232, sport_grounds: 2, sport_grounds_1000: 0.1897, sport_clubs: 4, kids_in_sport: 1008, doc_ratio: 3915, med_stations: 7, med_satisfaction: 80.55, healthy_events: 46, bad_habits: 8.04, healthy_diet: 63.87, eco_events: 86.79 },
        m3: { x1: 1, x2: 5, x3: 3, x4: 4, x5: 5, x6: 4, x7: 1, x8: 2, x9: 2 }
    },
    {
        id: 56,
        name: "56-Mahalla",
        m1: { x1: 3686, x2: 909, x3: 284, x4: 1085, x5: 150, x6: 608, x7: 439, x8: 127, x9: 150 },
        m2: { total_pop: 9069, child_pop: 1874, active_pop: 4135, old_pop: 807, chronic_sick: 831, prev_check: 3057, sport_grounds: 5, sport_grounds_1000: 0.5513, sport_clubs: 10, kids_in_sport: 345, doc_ratio: 2083, med_stations: 4, med_satisfaction: 45.98, healthy_events: 22, bad_habits: 28.99, healthy_diet: 42.52, eco_events: 70.12 },
        m3: { x1: 5, x2: 2, x3: 5, x4: 2, x5: 1, x6: 3, x7: 5, x8: 4, x9: 5 }
    },
    {
        id: 57,
        name: "57-Mahalla",
        m1: { x1: 3903, x2: 815, x3: 389, x4: 1156, x5: 246, x6: 142, x7: 69, x8: 234, x9: 320 },
        m2: { total_pop: 9953, child_pop: 3245, active_pop: 4962, old_pop: 683, chronic_sick: 779, prev_check: 4663, sport_grounds: 2, sport_grounds_1000: 0.2009, sport_clubs: 19, kids_in_sport: 1771, doc_ratio: 3039, med_stations: 2, med_satisfaction: 61.95, healthy_events: 38, bad_habits: 28.09, healthy_diet: 64.31, eco_events: 47.34 },
        m3: { x1: 2, x2: 4, x3: 2, x4: 5, x5: 3, x6: 1, x7: 3, x8: 1, x9: 3 }
    },
    {
        id: 58,
        name: "58-Mahalla",
        m1: { x1: 3489, x2: 725, x3: 273, x4: 1327, x5: 224, x6: 485, x7: 438, x8: 172, x9: 115 },
        m2: { total_pop: 5897, child_pop: 1492, active_pop: 3583, old_pop: 526, chronic_sick: 1133, prev_check: 2184, sport_grounds: 4, sport_grounds_1000: 0.6783, sport_clubs: 6, kids_in_sport: 317, doc_ratio: 3117, med_stations: 1, med_satisfaction: 85.63, healthy_events: 43, bad_habits: 4.33, healthy_diet: 83.53, eco_events: 78.49 },
        m3: { x1: 4, x2: 3, x3: 4, x4: 1, x5: 4, x6: 2, x7: 2, x8: 3, x9: 1 }
    },
    {
        id: 59,
        name: "59-Mahalla",
        m1: { x1: 2542, x2: 504, x3: 236, x4: 885, x5: 100, x6: 57, x7: 74, x8: 189, x9: 175 },
        m2: { total_pop: 2603, child_pop: 848, active_pop: 1231, old_pop: 382, chronic_sick: 525, prev_check: 2114, sport_grounds: 1, sport_grounds_1000: 0.3842, sport_clubs: 5, kids_in_sport: 145, doc_ratio: 1284, med_stations: 1, med_satisfaction: 81.09, healthy_events: 78, bad_habits: 31.92, healthy_diet: 21.63, eco_events: 18.55 },
        m3: { x1: 3, x2: 1, x3: 1, x4: 3, x5: 2, x6: 5, x7: 4, x8: 5, x9: 4 }
    },
    {
        id: 60,
        name: "60-Mahalla",
        m1: { x1: 2583, x2: 621, x3: 281, x4: 965, x5: 221, x6: 76, x7: 50, x8: 54, x9: 111 },
        m2: { total_pop: 12080, child_pop: 3424, active_pop: 6109, old_pop: 1089, chronic_sick: 1693, prev_check: 9463, sport_grounds: 3, sport_grounds_1000: 0.2483, sport_clubs: 10, kids_in_sport: 1579, doc_ratio: 1232, med_stations: 2, med_satisfaction: 67.9, healthy_events: 97, bad_habits: 25.76, healthy_diet: 87.65, eco_events: 83.08 },
        m3: { x1: 1, x2: 5, x3: 3, x4: 4, x5: 5, x6: 4, x7: 1, x8: 2, x9: 2 }
    },
    {
        id: 61,
        name: "61-Mahalla",
        m1: { x1: 2300, x2: 512, x3: 191, x4: 669, x5: 92, x6: 288, x7: 256, x8: 107, x9: 85 },
        m2: { total_pop: 6010, child_pop: 1961, active_pop: 2710, old_pop: 1038, chronic_sick: 517, prev_check: 5256, sport_grounds: 7, sport_grounds_1000: 1.1647, sport_clubs: 7, kids_in_sport: 179, doc_ratio: 3315, med_stations: 1, med_satisfaction: 76.26, healthy_events: 69, bad_habits: 20.29, healthy_diet: 81.89, eco_events: 59.04 },
        m3: { x1: 2, x2: 4, x3: 5, x4: 1, x5: 3, x6: 3, x7: 2, x8: 5, x9: 4 }
    },
    {
        id: 62,
        name: "62-Mahalla",
        m1: { x1: 3966, x2: 935, x3: 375, x4: 1650, x5: 444, x6: 200, x7: 73, x8: 144, x9: 220 },
        m2: { total_pop: 3279, child_pop: 1005, active_pop: 1725, old_pop: 170, chronic_sick: 382, prev_check: 2440, sport_grounds: 3, sport_grounds_1000: 0.9149, sport_clubs: 5, kids_in_sport: 505, doc_ratio: 3985, med_stations: 1, med_satisfaction: 49.26, healthy_events: 7, bad_habits: 40.25, healthy_diet: 57.72, eco_events: 90.54 },
        m3: { x1: 5, x2: 1, x3: 3, x4: 4, x5: 2, x6: 5, x7: 1, x8: 3, x9: 2 }
    },
    {
        id: 63,
        name: "63-Mahalla",
        m1: { x1: 4108, x2: 752, x3: 485, x4: 1661, x5: 378, x6: 433, x7: 343, x8: 98, x9: 87 },
        m2: { total_pop: 5426, child_pop: 1539, active_pop: 2653, old_pop: 720, chronic_sick: 886, prev_check: 3953, sport_grounds: 2, sport_grounds_1000: 0.3686, sport_clubs: 2, kids_in_sport: 108, doc_ratio: 4185, med_stations: 1, med_satisfaction: 49.32, healthy_events: 56, bad_habits: 19.93, healthy_diet: 41.54, eco_events: 93.55 },
        m3: { x1: 3, x2: 2, x3: 4, x4: 5, x5: 1, x6: 4, x7: 3, x8: 1, x9: 5 }
    },
    {
        id: 64,
        name: "64-Mahalla",
        m1: { x1: 2979, x2: 599, x3: 328, x4: 1117, x5: 217, x6: 362, x7: 397, x8: 155, x9: 62 },
        m2: { total_pop: 13211, child_pop: 4378, active_pop: 6574, old_pop: 1380, chronic_sick: 784, prev_check: 7581, sport_grounds: 4, sport_grounds_1000: 0.3028, sport_clubs: 17, kids_in_sport: 1202, doc_ratio: 4025, med_stations: 1, med_satisfaction: 57.6, healthy_events: 47, bad_habits: 42.97, healthy_diet: 82.71, eco_events: 18.74 },
        m3: { x1: 1, x2: 5, x3: 2, x4: 3, x5: 4, x6: 2, x7: 5, x8: 4, x9: 3 }
    },
    {
        id: 65,
        name: "65-Mahalla",
        m1: { x1: 3580, x2: 775, x3: 283, x4: 1161, x5: 135, x6: 31, x7: 43, x8: 207, x9: 235 },
        m2: { total_pop: 13034, child_pop: 3112, active_pop: 6655, old_pop: 2180, chronic_sick: 541, prev_check: 6283, sport_grounds: 17, sport_grounds_1000: 1.3043, sport_clubs: 29, kids_in_sport: 1566, doc_ratio: 930, med_stations: 2, med_satisfaction: 74.01, healthy_events: 97, bad_habits: 6.07, healthy_diet: 38.35, eco_events: 97.02 },
        m3: { x1: 4, x2: 3, x3: 1, x4: 2, x5: 5, x6: 1, x7: 4, x8: 2, x9: 1 }
    },
    {
        id: 66,
        name: "66-Mahalla",
        m1: { x1: 2318, x2: 500, x3: 161, x4: 821, x5: 159, x6: 343, x7: 239, x8: 0, x9: 40 },
        m2: { total_pop: 11050, child_pop: 2352, active_pop: 5764, old_pop: 1745, chronic_sick: 1563, prev_check: 9245, sport_grounds: 5, sport_grounds_1000: 0.4525, sport_clubs: 20, kids_in_sport: 1138, doc_ratio: 2746, med_stations: 3, med_satisfaction: 95.03, healthy_events: 99, bad_habits: 26.15, healthy_diet: 77.87, eco_events: 19.67 },
        m3: { x1: 3, x2: 5, x3: 5, x4: 4, x5: 2, x6: 5, x7: 3, x8: 4, x9: 2 }
    },
    {
        id: 67,
        name: "67-Mahalla",
        m1: { x1: 2452, x2: 500, x3: 144, x4: 838, x5: 187, x6: 271, x7: 326, x8: 98, x9: 71 },
        m2: { total_pop: 2222, child_pop: 447, active_pop: 1354, old_pop: 215, chronic_sick: 315, prev_check: 690, sport_grounds: 1, sport_grounds_1000: 0.45, sport_clubs: 1, kids_in_sport: 126, doc_ratio: 1009, med_stations: 1, med_satisfaction: 62.34, healthy_events: 39, bad_habits: 28.34, healthy_diet: 48.42, eco_events: 29.5 },
        m3: { x1: 5, x2: 2, x3: 4, x4: 1, x5: 4, x6: 2, x7: 1, x8: 3, x9: 5 }
    },
    {
        id: 68,
        name: "68-Mahalla",
        m1: { x1: 3695, x2: 708, x3: 311, x4: 1298, x5: 322, x6: 280, x7: 444, x8: 261, x9: 211 },
        m2: { total_pop: 11877, child_pop: 2220, active_pop: 7005, old_pop: 1803, chronic_sick: 1533, prev_check: 7154, sport_grounds: 16, sport_grounds_1000: 1.3471, sport_clubs: 4, kids_in_sport: 696, doc_ratio: 2046, med_stations: 6, med_satisfaction: 64.91, healthy_events: 91, bad_habits: 7.01, healthy_diet: 16.87, eco_events: 63.53 },
        m3: { x1: 2, x2: 4, x3: 2, x4: 5, x5: 1, x6: 4, x7: 5, x8: 1, x9: 3 }
    },
    {
        id: 69,
        name: "69-Mahalla",
        m1: { x1: 4261, x2: 846, x3: 327, x4: 1607, x5: 433, x6: 95, x7: 139, x8: 308, x9: 265 },
        m2: { total_pop: 2876, child_pop: 576, active_pop: 1578, old_pop: 377, chronic_sick: 475, prev_check: 1586, sport_grounds: 2, sport_grounds_1000: 0.6954, sport_clubs: 2, kids_in_sport: 189, doc_ratio: 2149, med_stations: 2, med_satisfaction: 41.98, healthy_events: 67, bad_habits: 39.99, healthy_diet: 56.86, eco_events: 86.16 },
        m3: { x1: 4, x2: 1, x3: 1, x4: 3, x5: 5, x6: 1, x7: 2, x8: 4, x9: 2 }
    },
    {
        id: 70,
        name: "70-Mahalla",
        m1: { x1: 3355, x2: 743, x3: 311, x4: 1105, x5: 122, x6: 396, x7: 315, x8: 78, x9: 225 },
        m2: { total_pop: 8846, child_pop: 2231, active_pop: 4485, old_pop: 705, chronic_sick: 1028, prev_check: 5082, sport_grounds: 2, sport_grounds_1000: 0.2261, sport_clubs: 10, kids_in_sport: 928, doc_ratio: 1947, med_stations: 1, med_satisfaction: 91.3, healthy_events: 11, bad_habits: 38.1, healthy_diet: 17.92, eco_events: 18.5 },
        m3: { x1: 1, x2: 5, x3: 5, x4: 4, x5: 2, x6: 3, x7: 4, x8: 2, x9: 1 }
    },
    {
        id: 71,
        name: "71-Mahalla",
        m1: { x1: 3757, x2: 828, x3: 391, x4: 1616, x5: 255, x6: 198, x7: 204, x8: 0, x9: 144 },
        m2: { total_pop: 13904, child_pop: 3332, active_pop: 6418, old_pop: 930, chronic_sick: 2944, prev_check: 9326, sport_grounds: 13, sport_grounds_1000: 0.935, sport_clubs: 15, kids_in_sport: 1768, doc_ratio: 3988, med_stations: 5, med_satisfaction: 90.87, healthy_events: 10, bad_habits: 15.79, healthy_diet: 36.56, eco_events: 19.12 },
        m3: { x1: 4, x2: 4, x3: 3, x4: 2, x5: 4, x6: 5, x7: 3, x8: 5, x9: 3 }
    },
    {
        id: 72,
        name: "72-Mahalla",
        m1: { x1: 4295, x2: 953, x3: 416, x4: 1447, x5: 375, x6: 497, x7: 354, x8: 228, x9: 158 },
        m2: { total_pop: 10113, child_pop: 2165, active_pop: 4892, old_pop: 1369, chronic_sick: 511, prev_check: 8676, sport_grounds: 6, sport_grounds_1000: 0.5933, sport_clubs: 18, kids_in_sport: 792, doc_ratio: 3506, med_stations: 6, med_satisfaction: 94.45, healthy_events: 83, bad_habits: 29.16, healthy_diet: 64.63, eco_events: 12.31 },
        m3: { x1: 2, x2: 2, x3: 4, x4: 5, x5: 1, x6: 1, x7: 5, x8: 1, x9: 4 }
    },
    {
        id: 73,
        name: "73-Mahalla",
        m1: { x1: 2335, x2: 500, x3: 175, x4: 893, x5: 208, x6: 281, x7: 210, x8: 0, x9: 70 },
        m2: { total_pop: 12577, child_pop: 3933, active_pop: 5892, old_pop: 1066, chronic_sick: 2057, prev_check: 6338, sport_grounds: 7, sport_grounds_1000: 0.5566, sport_clubs: 3, kids_in_sport: 2078, doc_ratio: 2639, med_stations: 4, med_satisfaction: 43.65, healthy_events: 65, bad_habits: 5.26, healthy_diet: 73.42, eco_events: 28.93 },
        m3: { x1: 5, x2: 3, x3: 1, x4: 3, x5: 4, x6: 4, x7: 2, x8: 4, x9: 2 }
    },
    {
        id: 74,
        name: "74-Mahalla",
        m1: { x1: 2576, x2: 648, x3: 237, x4: 843, x5: 197, x6: 179, x7: 106, x8: 88, x9: 127 },
        m2: { total_pop: 8678, child_pop: 2192, active_pop: 4384, old_pop: 611, chronic_sick: 795, prev_check: 7995, sport_grounds: 8, sport_grounds_1000: 0.9219, sport_clubs: 18, kids_in_sport: 297, doc_ratio: 3316, med_stations: 1, med_satisfaction: 39.98, healthy_events: 47, bad_habits: 21.38, healthy_diet: 61.6, eco_events: 46.45 },
        m3: { x1: 3, x2: 5, x3: 5, x4: 1, x5: 2, x6: 2, x7: 4, x8: 3, x9: 1 }
    },
    {
        id: 75,
        name: "75-Mahalla",
        m1: { x1: 2548, x2: 505, x3: 200, x4: 863, x5: 118, x6: 148, x7: 282, x8: 209, x9: 159 },
        m2: { total_pop: 5331, child_pop: 1604, active_pop: 2707, old_pop: 345, chronic_sick: 447, prev_check: 3987, sport_grounds: 4, sport_grounds_1000: 0.7503, sport_clubs: 9, kids_in_sport: 120, doc_ratio: 2023, med_stations: 2, med_satisfaction: 35.47, healthy_events: 34, bad_habits: 12.66, healthy_diet: 21.66, eco_events: 32.49 },
        m3: { x1: 1, x2: 1, x3: 2, x4: 4, x5: 5, x6: 3, x7: 1, x8: 2, x9: 5 }
    },
    {
        id: 76,
        name: "76-Mahalla",
        m1: { x1: 2687, x2: 529, x3: 239, x4: 904, x5: 180, x6: 356, x7: 314, x8: 11, x9: 36 },
        m2: { total_pop: 7175, child_pop: 1429, active_pop: 3804, old_pop: 823, chronic_sick: 391, prev_check: 4675, sport_grounds: 3, sport_grounds_1000: 0.4181, sport_clubs: 10, kids_in_sport: 597, doc_ratio: 1875, med_stations: 2, med_satisfaction: 80.26, healthy_events: 46, bad_habits: 22.85, healthy_diet: 16.62, eco_events: 37.55 },
        m3: { x1: 4, x2: 4, x3: 3, x4: 2, x5: 3, x6: 1, x7: 5, x8: 4, x9: 2 }
    },
    {
        id: 77,
        name: "77-Mahalla",
        m1: { x1: 2670, x2: 519, x3: 196, x4: 812, x5: 150, x6: 21, x7: 82, x8: 210, x9: 228 },
        m2: { total_pop: 8833, child_pop: 2400, active_pop: 4292, old_pop: 1256, chronic_sick: 458, prev_check: 2771, sport_grounds: 5, sport_grounds_1000: 0.5661, sport_clubs: 17, kids_in_sport: 936, doc_ratio: 3595, med_stations: 6, med_satisfaction: 40.38, healthy_events: 85, bad_habits: 13.98, healthy_diet: 60.05, eco_events: 56.11 },
        m3: { x1: 2, x2: 2, x3: 5, x4: 5, x5: 1, x6: 4, x7: 3, x8: 1, x9: 3 }
    },
    {
        id: 78,
        name: "78-Mahalla",
        m1: { x1: 3369, x2: 675, x3: 264, x4: 1131, x5: 253, x6: 43, x7: 39, x8: 200, x9: 216 },
        m2: { total_pop: 8284, child_pop: 2645, active_pop: 3790, old_pop: 1217, chronic_sick: 1475, prev_check: 2903, sport_grounds: 8, sport_grounds_1000: 0.9657, sport_clubs: 11, kids_in_sport: 414, doc_ratio: 3394, med_stations: 2, med_satisfaction: 93.45, healthy_events: 66, bad_habits: 10.06, healthy_diet: 18.74, eco_events: 32.53 },
        m3: { x1: 5, x2: 3, x3: 4, x4: 3, x5: 4, x6: 5, x7: 2, x8: 5, x9: 1 }
    },
    {
        id: 79,
        name: "79-Mahalla",
        m1: { x1: 3321, x2: 698, x3: 329, x4: 1064, x5: 275, x6: 103, x7: 90, x8: 84, x9: 168 },
        m2: { total_pop: 4642, child_pop: 1283, active_pop: 2316, old_pop: 691, chronic_sick: 295, prev_check: 3760, sport_grounds: 3, sport_grounds_1000: 0.6463, sport_clubs: 8, kids_in_sport: 600, doc_ratio: 2216, med_stations: 3, med_satisfaction: 69.43, healthy_events: 65, bad_habits: 29.61, healthy_diet: 83.46, eco_events: 65.2 },
        m3: { x1: 3, x2: 1, x3: 1, x4: 1, x5: 2, x6: 2, x7: 4, x8: 3, x9: 4 }
    },
    {
        id: 80,
        name: "80-Mahalla",
        m1: { x1: 3824, x2: 930, x3: 386, x4: 1184, x5: 227, x6: 461, x7: 370, x8: 193, x9: 168 },
        m2: { total_pop: 4273, child_pop: 1070, active_pop: 2297, old_pop: 474, chronic_sick: 775, prev_check: 2950, sport_grounds: 2, sport_grounds_1000: 0.4681, sport_clubs: 2, kids_in_sport: 325, doc_ratio: 735, med_stations: 1, med_satisfaction: 52.51, healthy_events: 66, bad_habits: 44.07, healthy_diet: 17.68, eco_events: 62.28 },
        m3: { x1: 1, x2: 5, x3: 3, x4: 4, x5: 5, x6: 4, x7: 1, x8: 2, x9: 2 }
    },
    {
        id: 81,
        name: "81-Mahalla",
        m1: { x1: 2233, x2: 552, x3: 250, x4: 820, x5: 117, x6: 278, x7: 212, x8: 0, x9: 74 },
        m2: { total_pop: 8099, child_pop: 2057, active_pop: 4439, old_pop: 989, chronic_sick: 1622, prev_check: 4834, sport_grounds: 9, sport_grounds_1000: 1.1112, sport_clubs: 13, kids_in_sport: 467, doc_ratio: 2312, med_stations: 1, med_satisfaction: 38.77, healthy_events: 15, bad_habits: 40.86, healthy_diet: 39.19, eco_events: 72.86 },
        m3: { x1: 5, x2: 2, x3: 2, x4: 2, x5: 1, x6: 3, x7: 5, x8: 4, x9: 5 }
    },
    {
        id: 82,
        name: "82-Mahalla",
        m1: { x1: 2667, x2: 609, x3: 221, x4: 981, x5: 244, x6: 74, x7: 82, x8: 186, x9: 190 },
        m2: { total_pop: 10066, child_pop: 2853, active_pop: 5680, old_pop: 555, chronic_sick: 2197, prev_check: 6501, sport_grounds: 9, sport_grounds_1000: 0.8941, sport_clubs: 10, kids_in_sport: 1583, doc_ratio: 1995, med_stations: 6, med_satisfaction: 76.41, healthy_events: 10, bad_habits: 29.87, healthy_diet: 38.45, eco_events: 39.01 },
        m3: { x1: 2, x2: 4, x3: 5, x4: 5, x5: 3, x6: 1, x7: 3, x8: 1, x9: 3 }
    },
    {
        id: 83,
        name: "83-Mahalla",
        m1: { x1: 2690, x2: 509, x3: 201, x4: 985, x5: 213, x6: 292, x7: 170, x8: 5, x9: 116 },
        m2: { total_pop: 10941, child_pop: 3157, active_pop: 5909, old_pop: 951, chronic_sick: 1693, prev_check: 9827, sport_grounds: 13, sport_grounds_1000: 1.1882, sport_clubs: 10, kids_in_sport: 1170, doc_ratio: 1109, med_stations: 3, med_satisfaction: 94.03, healthy_events: 71, bad_habits: 20.07, healthy_diet: 60.58, eco_events: 92.54 },
        m3: { x1: 4, x2: 3, x3: 4, x4: 1, x5: 4, x6: 2, x7: 2, x8: 3, x9: 1 }
    },
    {
        id: 84,
        name: "84-Mahalla",
        m1: { x1: 2509, x2: 642, x3: 260, x4: 978, x5: 123, x6: 172, x7: 190, x8: 44, x9: 89 },
        m2: { total_pop: 6872, child_pop: 1852, active_pop: 3311, old_pop: 918, chronic_sick: 373, prev_check: 5249, sport_grounds: 9, sport_grounds_1000: 1.3097, sport_clubs: 16, kids_in_sport: 1022, doc_ratio: 936, med_stations: 3, med_satisfaction: 66.02, healthy_events: 7, bad_habits: 16.66, healthy_diet: 90.85, eco_events: 40.07 },
        m3: { x1: 3, x2: 1, x3: 1, x4: 3, x5: 2, x6: 5, x7: 4, x8: 5, x9: 4 }
    },
    {
        id: 85,
        name: "85-Mahalla",
        m1: { x1: 4088, x2: 977, x3: 487, x4: 1376, x5: 224, x6: 122, x7: 188, x8: 186, x9: 224 },
        m2: { total_pop: 9767, child_pop: 2058, active_pop: 4561, old_pop: 1758, chronic_sick: 842, prev_check: 8010, sport_grounds: 7, sport_grounds_1000: 0.7167, sport_clubs: 13, kids_in_sport: 939, doc_ratio: 2496, med_stations: 5, med_satisfaction: 88.46, healthy_events: 64, bad_habits: 28.49, healthy_diet: 23.11, eco_events: 25.91 },
        m3: { x1: 1, x2: 5, x3: 3, x4: 4, x5: 5, x6: 4, x7: 1, x8: 2, x9: 2 }
    },
    {
        id: 86,
        name: "86-Mahalla",
        m1: { x1: 2577, x2: 500, x3: 195, x4: 863, x5: 230, x6: 138, x7: 98, x8: 99, x9: 110 },
        m2: { total_pop: 13151, child_pop: 3990, active_pop: 6008, old_pop: 2041, chronic_sick: 1488, prev_check: 7511, sport_grounds: 13, sport_grounds_1000: 0.8885, sport_clubs: 10, kids_in_sport: 1174, doc_ratio: 1626, med_stations: 7, med_satisfaction: 62.38, healthy_events: 56, bad_habits: 16.69, healthy_diet: 78.73, eco_events: 51.27 },
        m3: { x1: 5, x2: 2, x3: 5, x4: 2, x5: 1, x6: 3, x7: 5, x8: 4, x9: 5 }
    },
    {
        id: 87,
        name: "87-Mahalla",
        m1: { x1: 3871, x2: 706, x3: 392, x4: 1416, x5: 326, x6: 0, x7: 114, x8: 361, x9: 246 },
        m2: { total_pop: 4978, child_pop: 1189, active_pop: 2671, old_pop: 862, chronic_sick: 586, prev_check: 2419, sport_grounds: 3, sport_grounds_1000: 0.6027, sport_clubs: 7, kids_in_sport: 691, doc_ratio: 3541, med_stations: 3, med_satisfaction: 43.44, healthy_events: 29, bad_habits: 30.29, healthy_diet: 84.3, eco_events: 58.8 },
        m3: { x1: 2, x2: 4, x3: 2, x4: 5, x5: 3, x6: 1, x7: 3, x8: 1, x9: 3 }
    },
    {
        id: 88,
        name: "88-Mahalla",
        m1: { x1: 4267, x2: 902, x3: 340, x4: 1499, x5: 208, x6: 59, x7: 138, x8: 284, x9: 262 },
        m2: { total_pop: 3480, child_pop: 1023, active_pop: 1605, old_pop: 407, chronic_sick: 160, prev_check: 1412, sport_grounds: 2, sport_grounds_1000: 0.5747, sport_clubs: 5, kids_in_sport: 519, doc_ratio: 930, med_stations: 2, med_satisfaction: 84.82, healthy_events: 89, bad_habits: 42.15, healthy_diet: 45.27, eco_events: 44.89 },
        m3: { x1: 4, x2: 3, x3: 4, x4: 1, x5: 4, x6: 2, x7: 2, x8: 3, x9: 1 }
    },
    {
        id: 89,
        name: "89-Mahalla",
        m1: { x1: 3455, x2: 677, x3: 368, x4: 1230, x5: 172, x6: 134, x7: 37, x8: 49, x9: 198 },
        m2: { total_pop: 7926, child_pop: 1726, active_pop: 3873, old_pop: 1421, chronic_sick: 280, prev_check: 7247, sport_grounds: 9, sport_grounds_1000: 1.1355, sport_clubs: 13, kids_in_sport: 838, doc_ratio: 1095, med_stations: 2, med_satisfaction: 85.62, healthy_events: 71, bad_habits: 9.69, healthy_diet: 69.97, eco_events: 49.48 },
        m3: { x1: 3, x2: 1, x3: 1, x4: 3, x5: 2, x6: 5, x7: 4, x8: 5, x9: 4 }
    },
    {
        id: 90,
        name: "90-Mahalla",
        m1: { x1: 4107, x2: 951, x3: 343, x4: 1739, x5: 286, x6: 355, x7: 402, x8: 266, x9: 128 },
        m2: { total_pop: 1886, child_pop: 613, active_pop: 899, old_pop: 99, chronic_sick: 110, prev_check: 1736, sport_grounds: 2, sport_grounds_1000: 1.0604, sport_clubs: 2, kids_in_sport: 292, doc_ratio: 1456, med_stations: 1, med_satisfaction: 49.54, healthy_events: 66, bad_habits: 29.54, healthy_diet: 15.34, eco_events: 83.63 },
        m3: { x1: 1, x2: 5, x3: 3, x4: 4, x5: 5, x6: 4, x7: 1, x8: 2, x9: 2 }
    },
    {
        id: 91,
        name: "91-Mahalla",
        m1: { x1: 2300, x2: 512, x3: 191, x4: 669, x5: 92, x6: 288, x7: 256, x8: 107, x9: 85 }, // m1 massividagi 91-id qiymatlari (jadval boshidan takroriy)
        m2: { total_pop: 9989, child_pop: 2752, active_pop: 5383, old_pop: 521, chronic_sick: 759, prev_check: 3943, sport_grounds: 7, sport_grounds_1000: 0.7008, sport_clubs: 15, kids_in_sport: 502, doc_ratio: 2100, med_stations: 5, med_satisfaction: 40.22, healthy_events: 98, bad_habits: 6.77, healthy_diet: 54.72, eco_events: 54.64 },
        m3: { x1: 4, x2: 2, x3: 5, x4: 1, x5: 3, x6: 3, x7: 2, x8: 5, x9: 4 }
    },
    {
        id: 92,
        name: "92-Mahalla",
        m1: { x1: 3966, x2: 935, x3: 375, x4: 1650, x5: 444, x6: 200, x7: 73, x8: 144, x9: 220 },
        m2: { total_pop: 10116, child_pop: 2718, active_pop: 5173, old_pop: 1019, chronic_sick: 1525, prev_check: 9585, sport_grounds: 5, sport_grounds_1000: 0.4943, sport_clubs: 3, kids_in_sport: 1315, doc_ratio: 1841, med_stations: 5, med_satisfaction: 73.32, healthy_events: 78, bad_habits: 34.14, healthy_diet: 38.26, eco_events: 13.9 },
        m3: { x1: 1, x2: 5, x3: 3, x4: 4, x5: 2, x6: 5, x7: 1, x8: 3, x9: 2 }
    },
    {
        id: 93,
        name: "93-Mahalla",
        m1: { x1: 4108, x2: 752, x3: 485, x4: 1661, x5: 378, x6: 433, x7: 343, x8: 98, x9: 87 },
        m2: { total_pop: 10745, child_pop: 2516, active_pop: 6015, old_pop: 1435, chronic_sick: 1720, prev_check: 10179, sport_grounds: 8, sport_grounds_1000: 0.7445, sport_clubs: 7, kids_in_sport: 312, doc_ratio: 3178, med_stations: 7, med_satisfaction: 37.26, healthy_events: 24, bad_habits: 36.44, healthy_diet: 85.29, eco_events: 37.77 },
        m3: { x1: 3, x2: 1, x3: 4, x4: 2, x5: 5, x6: 4, x7: 3, x8: 1, x9: 5 }
    },
    {
        id: 94,
        name: "94-Mahalla",
        m1: { x1: 2979, x2: 599, x3: 328, x4: 1117, x5: 217, x6: 362, x7: 397, x8: 155, x9: 62 },
        m2: { total_pop: 6880, child_pop: 1806, active_pop: 3316, old_pop: 1229, chronic_sick: 538, prev_check: 5485, sport_grounds: 3, sport_grounds_1000: 0.436, sport_clubs: 7, kids_in_sport: 866, doc_ratio: 3717, med_stations: 2, med_satisfaction: 42.59, healthy_events: 40, bad_habits: 40.47, healthy_diet: 73.18, eco_events: 88.73 },
        m3: { x1: 5, x2: 4, x3: 2, x4: 5, x5: 1, x6: 2, x7: 5, x8: 4, x9: 3 }
    },
    {
        id: 95,
        name: "95-Mahalla",
        m1: { x1: 3580, x2: 775, x3: 283, x4: 1161, x5: 135, x6: 31, x7: 43, x8: 207, x9: 235 },
        m2: { total_pop: 8134, child_pop: 1905, active_pop: 4738, old_pop: 604, chronic_sick: 812, prev_check: 6720, sport_grounds: 4, sport_grounds_1000: 0.4918, sport_clubs: 3, kids_in_sport: 540, doc_ratio: 2150, med_stations: 6, med_satisfaction: 46.01, healthy_events: 33, bad_habits: 8.21, healthy_diet: 37.87, eco_events: 36.02 },
        m3: { x1: 2, x2: 3, x3: 1, x4: 3, x5: 4, x6: 1, x7: 4, x8: 2, x9: 1 }
    },
    {
        id: 96,
        name: "96-Mahalla",
        m1: { x1: 2318, x2: 500, x3: 161, x4: 821, x5: 159, x6: 343, x7: 239, x8: 0, x9: 40 },
        m2: { total_pop: 9105, child_pop: 2517, active_pop: 4839, old_pop: 960, chronic_sick: 881, prev_check: 2986, sport_grounds: 11, sport_grounds_1000: 1.2081, sport_clubs: 9, kids_in_sport: 1508, doc_ratio: 1588, med_stations: 6, med_satisfaction: 92.82, healthy_events: 12, bad_habits: 30.14, healthy_diet: 40.88, eco_events: 80.5 },
        m3: { x1: 4, x2: 5, x3: 5, x4: 2, x5: 3, x6: 5, x7: 3, x8: 4, x9: 2 }
    },
    {
        id: 97,
        name: "97-Mahalla",
        m1: { x1: 2452, x2: 500, x3: 144, x4: 838, x5: 187, x6: 271, x7: 326, x8: 98, x9: 71 },
        m2: { total_pop: 12931, child_pop: 2659, active_pop: 8457, old_pop: 699, chronic_sick: 2054, prev_check: 7619, sport_grounds: 4, sport_grounds_1000: 0.3093, sport_clubs: 9, kids_in_sport: 1076, doc_ratio: 1904, med_stations: 9, med_satisfaction: 36.98, healthy_events: 20, bad_habits: 22.45, healthy_diet: 41.53, eco_events: 49.07 },
        m3: { x1: 3, x2: 2, x3: 4, x4: 1, x5: 5, x6: 2, x7: 1, x8: 3, x9: 5 }
    },
    {
        id: 98,
        name: "98-Mahalla",
        m1: { x1: 3695, x2: 708, x3: 311, x4: 1298, x5: 322, x6: 280, x7: 444, x8: 261, x9: 211 },
        m2: { total_pop: 3059, child_pop: 832, active_pop: 1510, old_pop: 364, chronic_sick: 469, prev_check: 1422, sport_grounds: 1, sport_grounds_1000: 0.3269, sport_clubs: 5, kids_in_sport: 270, doc_ratio: 1993, med_stations: 1, med_satisfaction: 50.97, healthy_events: 30, bad_habits: 22.3, healthy_diet: 94.69, eco_events: 35.13 },
        m3: { x1: 2, x2: 4, x3: 2, x4: 5, x5: 1, x6: 4, x7: 5, x8: 1, x9: 3 }
    },
    {
        id: 99,
        name: "99-Mahalla",
        m1: { x1: 4261, x2: 846, x3: 327, x4: 1607, x5: 433, x6: 95, x7: 139, x8: 308, x9: 265 },
        m2: { total_pop: 9847, child_pop: 2088, active_pop: 4592, old_pop: 666, chronic_sick: 618, prev_check: 7590, sport_grounds: 13, sport_grounds_1000: 1.3202, sport_clubs: 19, kids_in_sport: 1216, doc_ratio: 4152, med_stations: 5, med_satisfaction: 78.28, healthy_events: 57, bad_habits: 15.9, healthy_diet: 35.5, eco_events: 23.86 },
        m3: { x1: 5, x2: 3, x3: 1, x4: 3, x5: 4, x6: 1, x7: 2, x8: 4, x9: 2 }
    },
    {
        id: 100,
        name: "100-Mahalla",
        m1: { x1: 3355, x2: 743, x3: 391, x4: 1105, x5: 122, x6: 396, x7: 315, x8: 78, x9: 225 },
        m2: { total_pop: 13425, child_pop: 4408, active_pop: 6454, old_pop: 1784, chronic_sick: 1700, prev_check: 5103, sport_grounds: 5, sport_grounds_1000: 0.3724, sport_clubs: 7, kids_in_sport: 2137, doc_ratio: 695, med_stations: 6, med_satisfaction: 57.5, healthy_events: 81, bad_habits: 26.62, healthy_diet: 62.02, eco_events: 17.59 },
        m3: { x1: 1, x2: 1, x3: 5, x4: 4, x5: 2, x6: 3, x7: 4, x8: 2, x9: 1 }
    },
    {
        id: 101,
        name: "101-Mahalla",
        m1: { x1: 3757, x2: 828, x3: 391, x4: 1616, x5: 255, x6: 198, x7: 204, x8: 0, x9: 144 },
        m2: { total_pop: 6867, child_pop: 1674, active_pop: 3462, old_pop: 983, chronic_sick: 742, prev_check: 3916, sport_grounds: 6, sport_grounds_1000: 0.8737, sport_clubs: 3, kids_in_sport: 376, doc_ratio: 867, med_stations: 2, med_satisfaction: 66.56, healthy_events: 17, bad_habits: 37.99, healthy_diet: 56.86, eco_events: 61.73 },
        m3: { x1: 4, x2: 4, x3: 3, x4: 2, x5: 5, x6: 5, x7: 3, x8: 5, x9: 3 }
    },
    {
        id: 102,
        name: "102-Mahalla",
        m1: { x1: 4295, x2: 953, x3: 416, x4: 1447, x5: 375, x6: 497, x7: 354, x8: 228, x9: 158 },
        m2: { total_pop: 3914, child_pop: 975, active_pop: 1779, old_pop: 659, chronic_sick: 210, prev_check: 1569, sport_grounds: 1, sport_grounds_1000: 0.2555, sport_clubs: 4, kids_in_sport: 429, doc_ratio: 1846, med_stations: 3, med_satisfaction: 89.59, healthy_events: 85, bad_habits: 14.27, healthy_diet: 63.98, eco_events: 58.47 },
        m3: { x1: 2, x2: 2, x3: 4, x4: 5, x5: 1, x6: 1, x7: 5, x8: 1, x9: 4 }
    },
    {
        id: 103,
        name: "103-Mahalla",
        m1: { x1: 2335, x2: 500, x3: 175, x4: 893, x5: 208, x6: 281, x7: 210, x8: 0, x9: 70 },
        m2: { total_pop: 3850, child_pop: 1078, active_pop: 1765, old_pop: 500, chronic_sick: 584, prev_check: 2659, sport_grounds: 3, sport_grounds_1000: 0.7792, sport_clubs: 2, kids_in_sport: 424, doc_ratio: 3847, med_stations: 1, med_satisfaction: 91.36, healthy_events: 9, bad_habits: 39.42, healthy_diet: 16.9, eco_events: 93.47 },
        m3: { x1: 5, x2: 3, x3: 1, x4: 3, x5: 4, x6: 4, x7: 2, x8: 4, x9: 2 }
    },
    {
        id: 104,
        name: "104-Mahalla",
        m1: { x1: 2576, x2: 648, x3: 237, x4: 843, x5: 197, x6: 179, x7: 106, x8: 88, x9: 127 },
        m2: { total_pop: 11249, child_pop: 2501, active_pop: 6351, old_pop: 871, chronic_sick: 1659, prev_check: 3600, sport_grounds: 14, sport_grounds_1000: 1.2446, sport_clubs: 15, kids_in_sport: 1008, doc_ratio: 1688, med_stations: 2, med_satisfaction: 84.25, healthy_events: 44, bad_habits: 22.6, healthy_diet: 68.53, eco_events: 23.91 },
        m3: { x1: 3, x2: 5, x3: 5, x4: 1, x5: 2, x6: 2, x7: 4, x8: 3, x9: 1 }
    },
    {
        id: 105,
        name: "105-Mahalla",
        m1: { x1: 2548, x2: 505, x3: 200, x4: 863, x5: 118, x6: 148, x7: 282, x8: 209, x9: 159 },
        m2: { total_pop: 8609, child_pop: 2217, active_pop: 4741, old_pop: 659, chronic_sick: 770, prev_check: 6664, sport_grounds: 9, sport_grounds_1000: 1.0454, sport_clubs: 17, kids_in_sport: 1300, doc_ratio: 1071, med_stations: 3, med_satisfaction: 69.26, healthy_events: 35, bad_habits: 23.13, healthy_diet: 32.74, eco_events: 31.82 },
        m3: { x1: 1, x2: 1, x3: 2, x4: 4, x5: 5, x6: 3, x7: 1, x8: 2, x9: 5 }
    },
    {
        id: 106,
        name: "106-Mahalla",
        m1: { x1: 2687, x2: 529, x3: 239, x4: 904, x5: 180, x6: 356, x7: 314, x8: 11, x9: 36 },
        m2: { total_pop: 3386, child_pop: 637, active_pop: 1930, old_pop: 585, chronic_sick: 371, prev_check: 3167, sport_grounds: 4, sport_grounds_1000: 1.1813, sport_clubs: 6, kids_in_sport: 359, doc_ratio: 3196, med_stations: 1, med_satisfaction: 44.72, healthy_events: 100, bad_habits: 23.14, healthy_diet: 84.72, eco_events: 53.77 },
        m3: { x1: 4, x2: 4, x3: 3, x4: 2, x5: 3, x6: 1, x7: 5, x8: 4, x9: 2 }
    },
    {
        id: 107,
        name: "107-Mahalla",
        m1: { x1: 2670, x2: 519, x3: 196, x4: 812, x5: 150, x6: 21, x7: 82, x8: 210, x9: 228 },
        m2: { total_pop: 3275, child_pop: 1085, active_pop: 1642, old_pop: 379, chronic_sick: 232, prev_check: 1745, sport_grounds: 1, sport_grounds_1000: 0.3053, sport_clubs: 4, kids_in_sport: 581, doc_ratio: 2955, med_stations: 1, med_satisfaction: 67.74, healthy_events: 85, bad_habits: 21.67, healthy_diet: 85.01, eco_events: 74.02 },
        m3: { x1: 2, x2: 2, x3: 5, x4: 5, x5: 1, x6: 4, x7: 3, x8: 1, x9: 3 }
    },
    {
        id: 108,
        name: "108-Mahalla",
        m1: { x1: 3369, x2: 675, x3: 264, x4: 1131, x5: 253, x6: 43, x7: 39, x8: 200, x9: 216 },
        m2: { total_pop: 8406, child_pop: 2005, active_pop: 4547, old_pop: 858, chronic_sick: 563, prev_check: 5591, sport_grounds: 2, sport_grounds_1000: 0.2379, sport_clubs: 11, kids_in_sport: 943, doc_ratio: 1607, med_stations: 6, med_satisfaction: 76.5, healthy_events: 16, bad_habits: 43.98, healthy_diet: 43.48, eco_events: 79.95 },
        m3: { x1: 5, x2: 3, x3: 4, x4: 3, x5: 4, x6: 5, x7: 2, x8: 5, x9: 1 }
    },
    {
        id: 109,
        name: "109-Mahalla",
        m1: { x1: 3321, x2: 698, x3: 329, x4: 1064, x5: 275, x6: 103, x7: 90, x8: 84, x9: 168 },
        m2: { total_pop: 7355, child_pop: 1980, active_pop: 3451, old_pop: 717, chronic_sick: 1063, prev_check: 4155, sport_grounds: 1, sport_grounds_1000: 0.136, sport_clubs: 2, kids_in_sport: 876, doc_ratio: 3494, med_stations: 3, med_satisfaction: 44.09, healthy_events: 90, bad_habits: 9.73, healthy_diet: 89.17, eco_events: 38.03 },
        m3: { x1: 3, x2: 1, x3: 1, x4: 1, x5: 2, x6: 2, x7: 4, x8: 3, x9: 4 }
    },
    {
        id: 110,
        name: "110-Mahalla",
        m1: { x1: 3824, x2: 930, x3: 386, x4: 1184, x5: 227, x6: 461, x7: 370, x8: 193, x9: 168 },
        m2: { total_pop: 8238, child_pop: 2789, active_pop: 3745, old_pop: 1204, chronic_sick: 774, prev_check: 6975, sport_grounds: 6, sport_grounds_1000: 0.7283, sport_clubs: 14, kids_in_sport: 599, doc_ratio: 3537, med_stations: 2, med_satisfaction: 76.1, healthy_events: 98, bad_habits: 27.93, healthy_diet: 77.72, eco_events: 73.83 },
        m3: { x1: 1, x2: 5, x3: 3, x4: 4, x5: 5, x6: 4, x7: 1, x8: 2, x9: 2 }
    },
    {
        id: 111,
        name: "111-Mahalla",
        m1: { x1: 2233, x2: 552, x3: 250, x4: 820, x5: 117, x6: 278, x7: 212, x8: 0, x9: 74 },
        m2: { total_pop: 13072, child_pop: 3669, active_pop: 6201, old_pop: 1668, chronic_sick: 2020, prev_check: 12308, sport_grounds: 11, sport_grounds_1000: 0.8415, sport_clubs: 9, kids_in_sport: 287, doc_ratio: 2330, med_stations: 5, med_satisfaction: 78.99, healthy_events: 79, bad_habits: 19.59, healthy_diet: 79.84, eco_events: 31.31 },
        m3: { x1: 5, x2: 2, x3: 2, x4: 2, x5: 1, x6: 3, x7: 5, x8: 4, x9: 5 }
    },
    {
        id: 112,
        name: "112-Mahalla",
        m1: { x1: 2667, x2: 609, x3: 221, x4: 981, x5: 244, x6: 74, x7: 82, x8: 186, x9: 190 },
        m2: { total_pop: 11180, child_pop: 3709, active_pop: 5053, old_pop: 719, chronic_sick: 1002, prev_check: 4471, sport_grounds: 11, sport_grounds_1000: 0.9839, sport_clubs: 12, kids_in_sport: 1766, doc_ratio: 3914, med_stations: 7, med_satisfaction: 79.89, healthy_events: 11, bad_habits: 9.66, healthy_diet: 27.62, eco_events: 38.6 },
        m3: { x1: 2, x2: 4, x3: 5, x4: 5, x5: 3, x6: 1, x7: 3, x8: 1, x9: 3 }
    },
    {
        id: 113,
        name: "113-Mahalla",
        m1: { x1: 2690, x2: 509, x3: 201, x4: 985, x5: 213, x6: 292, x7: 170, x8: 5, x9: 116 },
        m2: { total_pop: 12649, child_pop: 3245, active_pop: 7440, old_pop: 1252, chronic_sick: 1484, prev_check: 8245, sport_grounds: 10, sport_grounds_1000: 0.7906, sport_clubs: 21, kids_in_sport: 1711, doc_ratio: 3051, med_stations: 7, med_satisfaction: 51.13, healthy_events: 51, bad_habits: 43.25, healthy_diet: 33.72, eco_events: 36.27 },
        m3: { x1: 4, x2: 3, x3: 4, x4: 1, x5: 4, x6: 2, x7: 2, x8: 3, x9: 1 }
    },
    {
        id: 114,
        name: "114-Mahalla",
        m1: { x1: 2509, x2: 642, x3: 260, x4: 978, x5: 123, x6: 172, x7: 190, x8: 44, x9: 89 },
        m2: { total_pop: 6676, child_pop: 2025, active_pop: 3258, old_pop: 946, chronic_sick: 821, prev_check: 4117, sport_grounds: 5, sport_grounds_1000: 0.7494, sport_clubs: 14, kids_in_sport: 905, doc_ratio: 1636, med_stations: 3, med_satisfaction: 68.13, healthy_events: 90, bad_habits: 20.18, healthy_diet: 39.34, eco_events: 78.03 },
        m3: { x1: 3, x2: 1, x3: 1, x4: 3, x5: 2, x6: 5, x7: 4, x8: 5, x9: 4 }
    },
    {
        id: 115,
        name: "115-Mahalla",
        m1: { x1: 4088, x2: 977, x3: 487, x4: 1376, x5: 224, x6: 122, x7: 188, x8: 186, x9: 224 },
        m2: { total_pop: 4199, child_pop: 951, active_pop: 2448, old_pop: 367, chronic_sick: 402, prev_check: 2486, sport_grounds: 2, sport_grounds_1000: 0.4763, sport_clubs: 5, kids_in_sport: 153, doc_ratio: 2539, med_stations: 3, med_satisfaction: 77.47, healthy_events: 18, bad_habits: 29.24, healthy_diet: 59.88, eco_events: 31.34 },
        m3: { x1: 1, x2: 5, x3: 3, x4: 4, x5: 5, x6: 4, x7: 1, x8: 2, x9: 2 }
    },
    {
        id: 116,
        name: "116-Mahalla",
        m1: { x1: 2577, x2: 500, x3: 195, x4: 863, x5: 230, x6: 138, x7: 98, x8: 99, x9: 110 },
        m2: { total_pop: 12774, child_pop: 4149, active_pop: 6033, old_pop: 1013, chronic_sick: 626, prev_check: 6617, sport_grounds: 9, sport_grounds_1000: 0.7046, sport_clubs: 21, kids_in_sport: 521, doc_ratio: 4072, med_stations: 9, med_satisfaction: 44.63, healthy_events: 67, bad_habits: 40.11, healthy_diet: 50.43, eco_events: 67.25 },
        m3: { x1: 5, x2: 2, x3: 5, x4: 2, x5: 1, x6: 3, x7: 5, x8: 4, x9: 5 }
    },
    {
        id: 117,
        name: "117-Mahalla",
        m1: { x1: 3871, x2: 706, x3: 392, x4: 1416, x5: 326, x6: 0, x7: 114, x8: 361, x9: 246 },
        m2: { total_pop: 6506, child_pop: 1505, active_pop: 3723, old_pop: 872, chronic_sick: 306, prev_check: 4417, sport_grounds: 5, sport_grounds_1000: 0.7685, sport_clubs: 11, kids_in_sport: 851, doc_ratio: 3888, med_stations: 1, med_satisfaction: 88.82, healthy_events: 22, bad_habits: 41.71, healthy_diet: 94.76, eco_events: 44.94 },
        m3: { x1: 2, x2: 4, x3: 2, x4: 5, x5: 3, x6: 1, x7: 3, x8: 1, x9: 3 }
    },
    {
        id: 118,
        name: "118-Mahalla",
        m1: { x1: 4267, x2: 902, x3: 340, x4: 1499, x5: 208, x6: 59, x7: 138, x8: 284, x9: 262 },
        m2: { total_pop: 9916, child_pop: 2080, active_pop: 5698, old_pop: 1461, chronic_sick: 843, prev_check: 3220, sport_grounds: 5, sport_grounds_1000: 0.5042, sport_clubs: 15, kids_in_sport: 1166, doc_ratio: 1806, med_stations: 3, med_satisfaction: 74.12, healthy_events: 55, bad_habits: 40.46, healthy_diet: 21.41, eco_events: 54.37 },
        m3: { x1: 4, x2: 3, x3: 4, x4: 1, x5: 4, x6: 2, x7: 2, x8: 3, x9: 1 }
    },
    {
        id: 119,
        name: "119-Mahalla",
        m1: { x1: 3455, x2: 677, x3: 368, x4: 1230, x5: 172, x6: 134, x7: 37, x8: 49, x9: 198 },
        m2: { total_pop: 6270, child_pop: 1322, active_pop: 3050, old_pop: 405, chronic_sick: 735, prev_check: 2946, sport_grounds: 2, sport_grounds_1000: 0.319, sport_clubs: 11, kids_in_sport: 641, doc_ratio: 2644, med_stations: 3, med_satisfaction: 45.71, healthy_events: 86, bad_habits: 40.78, healthy_diet: 80.29, eco_events: 55.34 },
        m3: { x1: 3, x2: 1, x3: 1, x4: 3, x5: 2, x6: 5, x7: 4, x8: 5, x9: 4 }
    },
    {
        id: 120,
        name: "120-Mahalla",
        m1: { x1: 4107, x2: 951, x3: 343, x4: 1739, x5: 286, x6: 355, x7: 402, x8: 266, x9: 128 },
        m2: { total_pop: 3221, child_pop: 786, active_pop: 2061, old_pop: 201, chronic_sick: 389, prev_check: 2956, sport_grounds: 1, sport_grounds_1000: 0.3105, sport_clubs: 3, kids_in_sport: 232, doc_ratio: 1561, med_stations: 1, med_satisfaction: 70.53, healthy_events: 59, bad_habits: 14.72, healthy_diet: 40.56, eco_events: 30.79 },
        m3: { x1: 1, x2: 5, x3: 3, x4: 4, x5: 5, x6: 4, x7: 1, x8: 2, x9: 2 }
    },
];