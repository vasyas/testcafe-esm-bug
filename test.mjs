import { Selector } from 'testcafe';

fixture `Fixture`
    .page('http://example.com');

test('test', async t => {
  await t
      .click('body')
      .expect(Selector('h1').text).eql('Example Domain');
});