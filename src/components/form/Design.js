import React from 'react';
import '../../stylesheets/form/design.scss';
import Collapsable from './Collapsable';
import Palette from './Palette';

function Design() {
  return (
    <section className="collapsable">
      <Collapsable title="Diseña" name="">
        <h2 className="collapsable__header--title">Diseña</h2>
        <i className="collapsable__header--icon far fa-object-ungroup"></i>
      </Collapsable>
      <div className="collapsable__box js-collapsable-close">
        <div className="collapsable__colors">
          <h3 className="collapsable__colors--title">Colores</h3>
        </div>
        <div className="collapsable__content design">
          <Palette i={0} />
          <Palette i={1} />
          <Palette i={2} />
        </div>
      </div>
    </section>
  );
}

export default Design;
