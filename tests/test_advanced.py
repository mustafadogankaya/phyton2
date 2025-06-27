# -*- coding: utf-8 -*-

from .context import sample

import unittest
import io
import sys


class AdvancedTestSuite(unittest.TestCase):
    """Advanced test cases."""

    def test_thoughts(self):
        self.assertIsNone(sample.hmm())

    def test_hmm_function_prints_output(self):
        """Test that hmm function prints the expected output."""
        # Capture stdout to verify print output
        captured_output = io.StringIO()
        sys.stdout = captured_output
        
        result = sample.hmm()
        
        # Restore stdout
        sys.stdout = sys.__stdout__
        
        # Check that function returns None
        self.assertIsNone(result)
        
        # Check that correct text was printed
        output = captured_output.getvalue().strip()
        self.assertEqual(output, 'hmmm...')


if __name__ == '__main__':
    unittest.main()
