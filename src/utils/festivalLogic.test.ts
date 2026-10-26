import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getTonleSapHydrology,
  calculateRaceMetrics,
  validateWish,
  calculateAmbokServing,
} from './festivalLogic';

test('hydrology correctly reflects monsoon swelling and November reversal', () => {
  const monsoonState = getTonleSapHydrology(8); // August
  assert.equal(monsoonState.isMonsoon, true);
  assert.equal(monsoonState.flowDirection, 'upstream_to_lake');
  assert.ok(monsoonState.lakeAreaSqKm > 5000);

  const festivalMonthState = getTonleSapHydrology(11); // November
  assert.equal(festivalMonthState.isMonsoon, false);
  assert.equal(festivalMonthState.flowDirection, 'downstream_to_mekong');
  assert.ok(festivalMonthState.significance.includes('flow reversal'));

  const dryState = getTonleSapHydrology(4); // April
  assert.equal(dryState.flowDirection, 'downstream_to_mekong');
  assert.ok(dryState.lakeAreaSqKm < 6000);
});

test('race metrics calculate realistic boat speed and finish time', () => {
  const metrics = calculateRaceMetrics(64, 55, 1700);
  assert.equal(metrics.rowers, 64);
  assert.equal(metrics.strokeRate, 55);
  assert.ok(metrics.speedKmh > 10 && metrics.speedKmh < 26);
  assert.ok(metrics.finishTimeSeconds > 200 && metrics.finishTimeSeconds < 600);
  assert.match(metrics.formattedTime, /^\d+m \d{2}s$/);
});

test('wish validation handles short, long, and normal strings', () => {
  assert.equal(validateWish('').valid, false);
  assert.equal(validateWish('hi').valid, false);
  assert.equal(validateWish('Peace and prosperity for my family and all beings').valid, true);
  
  const superLong = 'a'.repeat(150);
  const validated = validateWish(superLong);
  assert.equal(validated.valid, false);
});

test('ambok serving calculation scales accurately', () => {
  const single = calculateAmbokServing(1);
  assert.equal(single.ambokGrams, 80);
  assert.equal(single.bananas, 2);

  const family = calculateAmbokServing(4);
  assert.equal(family.ambokGrams, 320);
  assert.equal(family.bananas, 8);
  assert.equal(family.coconutWaterMl, 480);
});
