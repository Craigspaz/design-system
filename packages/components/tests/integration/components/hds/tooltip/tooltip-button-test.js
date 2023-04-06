/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { focus, render, triggerKeyEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | hds/tooltip/index', function (hooks) {
  setupRenderingTest(hooks);

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(
      hbs`<Hds::TooltipButton @text="More info." id="test-tooltip-button">info</Hds::TooltipButton>`
    );
    assert.dom('#test-tooltip-button').hasClass('hds-tooltip-button');
  });

  // Test Content & accessibility features

  test('it displays the tooltip when focused and dismisses it if Escape key is triggered', async function (assert) {
    const escapeKey = 27;

    function wait(timeout = 1000) {
      return new Promise((resolve) => {
        setTimeout(resolve, timeout);
      });
    }

    await render(
      hbs`<Hds::TooltipButton @text="More info." id="test-tooltip-button">info</Hds::TooltipButton>`
    );

    // Test that tooltip does not display by default:
    assert.dom('.tippy-box').doesNotExist();

    // Focus button to trigger tooltip display:
    await focus('#test-tooltip-button');
    assert.dom('.tippy-box').exists();

    // Trigger escape key to close the tooltip:
    await triggerKeyEvent('#test-tooltip-button', 'keydown', escapeKey);
    await wait();
    // test that the tooltip is now gone:
    assert.dom('.tippy-box').doesNotExist();
  });

  test('the tooltip has a role of "tooltip"', async function (assert) {
    await render(
      hbs`<Hds::TooltipButton @text="More info." id="test-tooltip-button">info</Hds::TooltipButton>`
    );
    await focus('#test-tooltip-button');
    assert.dom('.tippy-box').hasAttribute('role', 'tooltip');
  });

  test('it renders plain text content passed into the tooltip', async function (assert) {
    await render(
      hbs`<Hds::TooltipButton @text="More info." id="test-tooltip-button">info</Hds::TooltipButton>`
    );
    await focus('#test-tooltip-button');
    assert.dom('.tippy-content').hasText('More info.');
  });

  test('it renders rich HTML and text content passed into the tooltip', async function (assert) {
    await render(
      hbs`<Hds::TooltipButton @text="<em>em</em> <strong>strong</strong>" id="test-tooltip-button">info</Hds::TooltipButton>`
    );
    await focus('#test-tooltip-button');
    assert.dom('.tippy-content em').exists().hasText('em');
    assert.dom('.tippy-content strong').exists().hasText('strong');
  });

  test('the button has an aria-describedby attribute with a value matching the tooltip id', async function (assert) {
    await render(
      hbs`<Hds::TooltipButton @text="Hello" data-test-tooltip-button>info</Hds::TooltipButton>`
    );
    await focus('[data-test-tooltip-button]');
    assert.dom('[data-test-tooltip-button]').hasAttribute('aria-describedby');
    assert.dom('[data-tippy-root]').hasAttribute('id');

    assert.strictEqual(
      this.element
        .querySelector('[data-test-tooltip-button]')
        .getAttribute('aria-describedby'),
      this.element.querySelector('[data-tippy-root]').getAttribute('id')
    );
  });

  // ATTRIBUTES

  test('it should spread all the attributes passed to the component on the element', async function (assert) {
    await render(
      hbs`
      <Hds::TooltipButton @text="Here is more info." id="test-tooltip-button" class="my-class" data-test1 data-test2="test">info</Hds::TooltipButton>
      `
    );
    assert.dom('#test-tooltip-button').hasClass('my-class');
    assert.dom('#test-tooltip-button').hasAttribute('data-test1');
    assert.dom('#test-tooltip-button').hasAttribute('data-test2', 'test');
  });
});
