# -*- coding: utf-8 -*-

from .context import sample

import unittest


class BasicTestSuite(unittest.TestCase):
    """Basic test cases."""

    def test_absolute_truth_and_meaning(self):
        assert True

    def test_sample_module_import(self):
        """Test that sample module can be imported."""
        self.assertIsNotNone(sample)
        
    def test_sample_hmm_function_exists(self):
        """Test that hmm function is available in sample module."""
        self.assertTrue(hasattr(sample, 'hmm'))
        self.assertTrue(callable(sample.hmm))


if __name__ == '__main__':
    unittest.main()