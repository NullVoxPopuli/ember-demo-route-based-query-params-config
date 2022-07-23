import Application from 'ember-demo-route-based-query-params-config/app';
import config from 'ember-demo-route-based-query-params-config/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
