import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateDiscountPercent,
  calculateSavings,
  formatCurrencyPrice,
  calculateCombinedOrder,
} from './pricing';

test('calculateDiscountPercent correctly calculates discount percentage', () => {
  assert.equal(calculateDiscountPercent(67, 15), 78);
  assert.equal(calculateDiscountPercent(100, 20), 80);
  assert.equal(calculateDiscountPercent(0, 15), 0);
});

test('calculateSavings returns difference between regular and offer price', () => {
  assert.equal(calculateSavings(67, 15), 52);
  assert.equal(calculateSavings(15, 67), 0);
});

test('formatCurrencyPrice formats currencies correctly', () => {
  assert.equal(formatCurrencyPrice(15, 'USD'), '$15');
  assert.equal(formatCurrencyPrice(16, 'EUR'), '€16');
  assert.match(formatCurrencyPrice(299, 'MXN'), /MX\$\s*299/);
});

test('calculateCombinedOrder produces accurate receipts', () => {
  const result = calculateCombinedOrder(27, 15);
  assert.equal(result.totalPrice, 42);
  assert.equal(result.totalSaved, 52);
});
