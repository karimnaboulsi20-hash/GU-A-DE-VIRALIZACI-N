import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateDiscountPercent,
  calculateSavings,
  formatCurrencyPrice,
  calculateCombinedOrder,
} from './pricing';

test('calculateDiscountPercent correctly calculates discount percentage', () => {
  assert.equal(calculateDiscountPercent(67, 9), 87);
  assert.equal(calculateDiscountPercent(100, 20), 80);
  assert.equal(calculateDiscountPercent(0, 9), 0);
});

test('calculateSavings returns difference between regular and offer price', () => {
  assert.equal(calculateSavings(67, 9), 58);
  assert.equal(calculateSavings(9, 67), 0);
});

test('formatCurrencyPrice formats currencies correctly', () => {
  assert.equal(formatCurrencyPrice(9, 'USD'), '$9');
  assert.equal(formatCurrencyPrice(16, 'EUR'), '€16');
  assert.match(formatCurrencyPrice(299, 'MXN'), /MX\$\s*299/);
});

test('calculateCombinedOrder produces accurate receipts', () => {
  const result = calculateCombinedOrder(27, 9);
  assert.equal(result.totalPrice, 36);
  assert.equal(result.totalSaved, 58);
});
