/**
 * Pure logic and calculations for Bon Om Touk (Cambodian Water Festival)
 */

export interface TonleSapState {
  month: number; // 1 - 12
  isMonsoon: boolean;
  flowDirection: 'upstream_to_lake' | 'downstream_to_mekong';
  lakeAreaSqKm: number;
  waterVolumeKm3: number;
  significance: string;
}

/**
 * Calculates hydrological state of Tonle Sap river and Great Lake
 * During monsoon (June-Oct), Mekong rises and forces Tonle Sap to flow upstream into the lake.
 * In November (Kadeuk full moon / Bon Om Touk), the flow reverses back down into Mekong.
 */
export function getTonleSapHydrology(month: number): TonleSapState {
  // Clamp month between 1 and 12
  const m = Math.max(1, Math.min(12, Math.floor(month)));
  
  if (m >= 6 && m <= 10) {
    // Monsoon peak: water pushes back up into the lake
    const factor = (m - 5) / 5; // 0.2 to 1.0
    const lakeArea = Math.round(2700 + factor * (16000 - 2700));
    const volume = Math.round(8 + factor * (80 - 8));
    return {
      month: m,
      isMonsoon: true,
      flowDirection: 'upstream_to_lake',
      lakeAreaSqKm: lakeArea,
      waterVolumeKm3: volume,
      significance: 'Tonle Sap swells up to 5-6 times its dry season size, depositing nutrient-rich silt.',
    };
  } else if (m === 11) {
    // November: Festival Month / Reversal!
    return {
      month: 11,
      isMonsoon: false,
      flowDirection: 'downstream_to_mekong',
      lakeAreaSqKm: 12000,
      waterVolumeKm3: 55,
      significance: 'The historic flow reversal occurs! Tonle Sap drains back into the Mekong, launching Bon Om Touk.',
    };
  } else {
    // Dry season (Dec - May): Low water, lake drains to minimal footprint
    const factor = m <= 5 ? (5 - m) / 5 : 0.8;
    const lakeArea = Math.round(2700 + (factor * 3000));
    const volume = Math.round(8 + (factor * 12));
    return {
      month: m,
      isMonsoon: false,
      flowDirection: 'downstream_to_mekong',
      lakeAreaSqKm: lakeArea,
      waterVolumeKm3: volume,
      significance: 'Dry season low waters. Fertile alluvial plains support rice paddy harvesting and rich fisheries.',
    };
  }
}

/**
 * Calculates dragon boat race metrics
 * @param rowers Number of rowers (typically 40 to 80)
 * @param strokeRate Strokes per minute (cadence, typically 40 to 70)
 * @param distanceMeters Course distance (standard 1700m in front of Royal Palace)
 */
export function calculateRaceMetrics(rowers: number, strokeRate: number, distanceMeters: number = 1700) {
  const safeRowers = Math.max(20, Math.min(100, rowers));
  const safeCadence = Math.max(30, Math.min(80, strokeRate));
  
  // Power factor proportional to rowers with diminishing returns due to boat length/drag
  const power = Math.pow(safeRowers, 0.75) * (safeCadence / 50);
  // Velocity in meters per second (approx 4.0 - 6.5 m/s for elite Touk Ngor)
  const speedMps = Math.min(6.8, Math.max(3.2, 3.2 + (power - 15) * 0.12));
  const speedKmh = speedMps * 3.6;
  const finishTimeSec = Math.round(distanceMeters / speedMps);
  
  const minutes = Math.floor(finishTimeSec / 60);
  const seconds = finishTimeSec % 60;
  
  return {
    rowers: safeRowers,
    strokeRate: safeCadence,
    speedMps: Number(speedMps.toFixed(2)),
    speedKmh: Number(speedKmh.toFixed(1)),
    finishTimeSeconds: finishTimeSec,
    formattedTime: `${minutes}m ${seconds < 10 ? '0' : ''}${seconds}s`,
  };
}

/**
 * Validates a wish for Loy Pratip lantern floating
 */
export function validateWish(wish: string): { valid: boolean; cleaned: string; error?: string } {
  const trimmed = wish.trim();
  if (trimmed.length < 3) {
    return { valid: false, cleaned: trimmed, error: 'A wish must be at least 3 characters long.' };
  }
  if (trimmed.length > 120) {
    return { valid: false, cleaned: trimmed.slice(0, 120), error: 'Wish must not exceed 120 characters.' };
  }
  return { valid: true, cleaned: trimmed };
}

/**
 * Calculates traditional Ambok serving proportions
 * Ambok: roasted and pestle-pounded new harvest paddy rice
 */
export function calculateAmbokServing(servings: number) {
  const count = Math.max(1, Math.min(50, Math.floor(servings)));
  return {
    servings: count,
    ambokGrams: count * 80,
    bananas: count * 2, // Sweet Chek Namva bananas
    gratedCoconutGrams: count * 35,
    coconutWaterMl: count * 120,
    palmSugarGrams: count * 15,
  };
}
