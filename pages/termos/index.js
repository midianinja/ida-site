import React from 'react';
import BaseHead from '../../components/base-head/base-head';
import Terms from '../../components/templates/terms/terms';

/**
 * Terms page, apresentation text Terms IDA
 * @returns {React.Component} application
 */
const TermsPage = () => (
  <>
    <BaseHead title="Termos de uso e políticas de privacidade" />
    <Terms />
    <div data-testid="terms-page" />
  </>
);

export default TermsPage;
