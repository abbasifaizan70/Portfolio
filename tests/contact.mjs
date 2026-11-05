import test from 'node:test';
import assert from 'node:assert/strict';
import {whatsappUrl} from '../scripts/contact-config.mjs';

test('WhatsApp contact stays absent until an owner number is configured',()=>{
  assert.equal(whatsappUrl(undefined),null);
  assert.equal(whatsappUrl('  '),null);
});
test('international formatting and custom messages survive the click-to-chat URL',()=>{
  const url=new URL(whatsappUrl('+1 (202) 555-0123','Hi Faizan, React & Rails?'));
  assert.equal(url.origin,'https://wa.me');
  assert.equal(url.pathname,'/12025550123');
  assert.equal(url.searchParams.get('text'),'Hi Faizan, React & Rails?');
});
test('rejects local numbers and malformed contact configuration',()=>{
  for(const value of ['03001234567','+92oops3001234567','+123','+1234567890123456']) assert.throws(()=>whatsappUrl(value));
});
